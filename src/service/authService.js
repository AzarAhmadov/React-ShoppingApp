import API from "../api/api";

export const getLogin = async (formData, setToken, setError) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${API.auth}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: formData.username.trim(),
                password: formData.password.trim(),
            }),
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }

        const data = await res.json();
        setToken(data.token);
        localStorage.setItem("saleToken", data.token);
    } catch (err) {
        setError(err)
    }
};


export const getLogout = () => {
    window.location.reload()
    return localStorage.removeItem('saleToken')
}