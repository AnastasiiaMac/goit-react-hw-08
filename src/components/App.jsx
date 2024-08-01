import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import ContactsPage from "../Pages/ContactsPage/ContactsPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginPage/LoginPage";

const App = () => {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
export default App;
