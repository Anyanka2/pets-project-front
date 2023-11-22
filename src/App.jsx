import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import PublicRoute from "../src/routes/PublicRoute";
import PrivateRoute from "../src/routes/PrivateRoute";
import { Loader } from "./components/Loader/Loader";
import { GlobalStyle } from "./shared/styles/GlobalStyles";
import { SearchBar } from "./shared/components/SearchBar/SearchBar";
import ScrollToTopButton from './components/Scroll-up-btn/Scroll-up-btn';

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
      <GlobalStyle />
      <ScrollToTopButton />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="main" element={<MainPage />} />
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

            <Route element={<PrivateRoute />}>
              <Route path="" element={<SearchBar />} />
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
