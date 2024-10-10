import { toast } from "react-toastify";

export const toastMsg = (type, msg) => {
    return toast[type](msg);
}