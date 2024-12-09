import { atom } from "recoil";

export const authState = atom({
    key : 'authState',
    default : window.sessionStorage.getItem("token")
})