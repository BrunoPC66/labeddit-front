import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
    HomePage,
    LoginPage,
    SignupPage,
    ComentsPage,
    ErrorPage
} from "../Pages"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/coments" element={<ComentsPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}