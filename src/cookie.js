import Cookies from "universal-cookie";
import LZString from "lz-string";

const cookies = new Cookies();
export const  setCookie = (name, value) => {
    if (name==='ch'){
        return cookies.set(name,(value), {path:'/',maxAge:60 * 60 * 24 * 365});}
    else{
        return cookies.set(name,LZString.compressToEncodedURIComponent(JSON.stringify(value)), {path:'/',maxAge:60 * 60 * 24 * 365});}
}


export const getCookie = (name) => {
    if (name==='ch'){
        return (cookies.get(name));}
    else{
        if(undefined===cookies.get(name)) return undefined
        else return JSON.parse(LZString.decompressFromEncodedURIComponent(cookies.get(name)));
    }
}

export const removeCookie = (name) => {
    return cookies.remove(name);
}

