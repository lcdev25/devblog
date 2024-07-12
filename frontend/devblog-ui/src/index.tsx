import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {HomePage} from "./pages/home/HomePage";
import {LandingPage} from "./pages/landing/LangingPage";
import {AuthProvider, useAuth} from "./context/AuthContext";
import {SignInPage} from "./pages/signin/SignInPage";
import {EditProfilePage} from "./pages/editprofile/EditProfilePage";
import {DashboardPage} from "./pages/dashboard/DashboardPage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
import {SignOutPage} from "./pages/signout/SignOutPage";
import {EditBlogPage} from "./pages/editblog/EditBlog";
import {NotificationsPage} from "./pages/notifications/NotificationsPage";
import {AboutPage} from "./pages/about/AboutPage";
import {ViewBlogPage} from "./pages/viewblog/ViewBlog";
import {ExploreTopicsPage} from "./pages/exploretopics/ExploreTopicsPage";
import {ExploreTopicBlogsPage} from "./pages/exploretopicblogs/ExploreTopicBlogsPage";

const ConditionalLandingOrHome: React.FC = () => {
    const {isAuthenticated} = useAuth();
    console.log("Eval home page " + isAuthenticated);
    return isAuthenticated ? <HomePage/> : <LandingPage/>;
};

interface ProtectedRouteProps {
    component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({component: Component}) => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Component/> : <Navigate to="/signin"/>;
};

interface PublicRouteProps {
    component: React.ComponentType<any>;
}

const PublicRoute: React.FC<PublicRouteProps> = ({component: Component}) => {
    const {isAuthenticated} = useAuth();
    return !isAuthenticated ? <Component/> : <Navigate to="/home"/>;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<ConditionalLandingOrHome/>}/>
                    <Route path="/signin" element={<PublicRoute component={SignInPage}/>}/>
                    <Route path="/home" element={<ProtectedRoute component={HomePage}/>}/>
                    <Route path="/editprofile" element={<ProtectedRoute component={EditProfilePage}/>}/>
                    <Route path="/viewprofile/:id" element={<ProtectedRoute component={EditProfilePage}/>}/>
                    <Route path="/editblog" element={<ProtectedRoute component={EditBlogPage}/>}/>
                    <Route path="/notifications" element={<ProtectedRoute component={NotificationsPage}/>}/>
                    <Route path="/dashboard" element={<ProtectedRoute component={DashboardPage}/>}/>
                    <Route path="/signout" element={<ProtectedRoute component={SignOutPage}/>}/>
                    <Route path="/blog/:id" element={<ViewBlogPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/exploretopics" element={<ExploreTopicsPage/>}/>
                    <Route path="/exploretopicblogs/:id" element={<ExploreTopicBlogsPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <>
            <App/>
        </>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
