import { Outlet } from "react-router-dom"
import { ContentWrapper } from "../ui/components/ContentWrapper"
import { Header } from "../ui/components/Header"
import { Footer } from "../ui/components/Footer"
import { useRecoilValue } from "recoil"
import { authState } from "../atoms/authState"

export const Layout = () => {
    const isAuth = useRecoilValue(authState)
    return <>
        {isAuth ? <Header name="Ankit Sharma" /> : null}
        <main>
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </main>
        {isAuth ? <Footer /> : null}
    </>
}