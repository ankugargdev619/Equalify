import {Button} from "../components/Button";
import {FacebookIcon} from "../icons/FacebookIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { FooterSection } from "./FooterSection";

const gernericStyles = "px-10 md:px-16 lg:px-28";

export const Footer = ()=>{
    return <>
        <footer className={`${gernericStyles} py-5 bg-brand-950 text-brand-50 max-h-fit`}>
            <div className="flex flex-col gap-5 md:flex-row justify-between flex-wrap my-4">
                <FooterSection className="w-full md:max-w-60" title="Equalify">
                    <p>Share and settle expenses with friends and family, making group finances simple and stress-free.</p>
                </FooterSection>
                <FooterSection title="Product">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>How It Works</li>
                </FooterSection>
                <FooterSection title="Company">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Contact</li>
                </FooterSection>
                <FooterSection title="Resources">
                    <li>Help Center</li>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Community</li>
                </FooterSection>
            </div>
            <div className="border-t-2 border-brand-600 ">
                <div className="flex flex-col md:flex-row justify-between my-4">
                    <div className="flex gap-4 my-2"> 
                        <FacebookIcon/>
                        <InstagramIcon />
                        <GithubIcon />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 my-2">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Settings</a>
                        <a href="#">© 2024 Equalify. All rights reserved.</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
}