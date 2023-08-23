import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignupPage/SignupPage";
import Header from "../Components/Header/Header"

export default function Router() {
    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/posts" element={<HomePage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/post-comments/:id" element={<CommentsPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}