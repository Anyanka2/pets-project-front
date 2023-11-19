import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { PublicRoute } from "../src/routes/PublicRoute";
import { PrivateRoute } from "../src/routes/PrivateRoute";
import { Loader } from "./components/Loader/Loader";
import { GlobalStyle } from "./shared/styles/GlobalStyles";
//import MainPage from "../pages/MainPage/MainPage";
//import NoticesPage from "../pages/NoticesPage/NoticesPage";
//import OurFriendsPage from "../pages/OurFriendsPage/OurFriendsPage";
//import RegisterPage from "../pages/RegisterPage/RegisterPage";
//import LoginPage from "../pages/LoginPage/LoginPage";
//import UserPage from "../pages/UserPage/UserPage";
//import AddPetPage from "../pages/AddPetPage/AddPetPage";
//import NewsPage from "../pages/NewsPage/NewsPage";
//import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const OurFriendsPage = lazy(() =>
  import("./pages/OurFriendsPage/OurFriendsPage")
);
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />} />
            <Route path="notices" element={<NoticesPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="user" element={<UserPage />} />
              <Route path="add-pet" element={<AddPetPage />} />
            </Route>

            <Route path="news" element={<NewsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
