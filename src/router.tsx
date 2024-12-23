import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layout/AuthLayout";
import AppLayout from "./layout/AppLayout";
import LinkRootsView from "./views/LinkRootsView";
import ProfileView from "./views/ProfileView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />} >
                    <Route path='/auth/login' element={<LoginView />} />
                    <Route path='/auth/register' element={<RegisterView />} />
                </Route>

                <Route path='/admin' element={<AppLayout />} >
                    <Route index={true} element={<LinkRootsView />} />
                    <Route path='profile' element={<ProfileView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}