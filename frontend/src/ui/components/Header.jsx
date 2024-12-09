import { useEffect, useState } from "react"
import { DashboardIcon } from "../icons/DashboardIcon"
import { GroupIcon } from "../icons/GroupIcon"
import { Avatar } from "./Avatar"
import { NavLink, useNavigate } from "react-router-dom"
import { LogoutIcon } from "../icons/LogoutIcon"
import { authState } from "../../atoms/authState"
import { useRecoilState } from "recoil"
import { Button } from "./Button"


const gernericStyles = "z-30 px-10 md:px-16 lg:px-28";

export const Header = (props) => {
    const [initials,setInitials] = useState("");
    const [isAuth,setIsAuth] = useRecoilState(authState);
    const navigate = useNavigate();
    useEffect(()=>{
        const value = props.name.split(" ").map((word)=> word.charAt(0))
                        .slice(0,2).join("");
        setInitials(value);
    });

    
    function logoutHandler() {
        setIsAuth(false);
        window.sessionStorage.setItem("token","");
        navigate("/login");
    }
    

    return <nav className="sticky top-0">
        <div className={`${gernericStyles} flex justify-between items-center md:w-screen h-16 bg-brand-950 text-white`}>
            <div className="flex gap-10 md:gap-12 lg:gap-16 items-center  text-xl">
                <img src="../../public/EqualifyLogo.png" className="h-12" />
                <NavLink to="/"
                    style={({ isActive }) => {
                    return isActive ? {borderBottom : "4px solid white"} : {};
                    }}
                >
                    <div className="flex gap-4 h-16 items-center"><DashboardIcon /><span className="hidden md:block">Dashboard</span></div>
                </NavLink>
                <NavLink to="/groups"
                    style={({ isActive }) => {
                    return isActive ? { borderBottom : "4px solid white"} : {};
                    }}
                >
                    <div className="flex gap-4 h-16 items-center"><GroupIcon /><span className="hidden md:block">Groups</span></div>
                </NavLink>
            </div>
            <div className="flex gap-2">
                <NavLink to="/profile">
                    <Avatar initials={initials} />
                </NavLink>
            </div>
        </div>
    </nav>
}