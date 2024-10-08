import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ChangePassword from "./Pages/Password/ChangePassword";
import ForgotPassword from "./Pages/Password/ForgotPassword";
import ResetPassword from "./Pages/Password/ResetPassword";
import AllexamsCatForUser from "./Pages/Exam/AllexamsCatForUser";
import AllexamsForUser from "./Pages/Exam/AllexamsForUser";
import Contact from "./Pages/Contact";
import Denied from "./Pages/Denied";

import Error from "./Components/Error";
import Success from "./Components/Success";

import RequireAuth from "./Components/auth/RequireAuth";
import CreateExam from "./Pages/adminExam/CreateCourse";
import Ranking from "./Pages/Exam/Ranking";
import CatAccessDashboard from "./Pages/adminExam/CatAccessDashboard";
import Allusers from "./Pages/adminExam/Allusers";
import AllExamCatAdmin from "./Pages/adminExam/AllExamCatAdmin";
import Category from "./Pages/adminExam/Category";
import Profile from "./Pages/User/Profile";
import CheckoutWP from "./Pages/Payment/CheckoutWP";
import AddMcq from "./Pages/Dashboard/DisplayLecture";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import Exam from "./Pages/Exam";
import Result from "./Pages/Result";
import { useSelector } from "react-redux";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const { isLoggedIn, role, data } = useSelector((state) => state.auth);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user/profile/reset-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/user/profile/reset-password/:resetToken"
          element={<ResetPassword />}
        />

        <Route path="/error?" element={<Error />} />
        <Route path="/success" element={<Success />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/category/create" element={<Category />} />
          <Route path="/allusers" element={<Allusers />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "INSTRUCTOR"]} />}>
          <Route path="/addexam/:catId" element={<CreateExam />} />
          <Route
            path="/catAccessDashbord/:catId"
            element={<CatAccessDashboard />}
          />
          <Route path="/addexam/mcqAdd/:id" element={<AddMcq />} />
          <Route path="/allexamCatAdmin" element={<AllExamCatAdmin />} />
        </Route>

        <Route
          element={
            <RequireAuth allowedRoles={["USER", "ADMIN", "INSTRUCTOR"]} />
          }
        >
          <Route path="/allexamsCatForUser" element={<AllexamsCatForUser />} />
          <Route path="/allexamsForUser/:catId" element={<AllexamsForUser />} />

          <Route path="/ranking/:examId" element={<Ranking />} />

          <Route path="/exam/:catId/:examId" element={<Exam />} />
          <Route path="/results/:catId/:examId" element={<Result />} />

          <Route path="/user/profile" element={<Profile />} />
          <Route
            path="/user/profile/change-password"
            element={<ChangePassword />}
          />

          <Route path="/buy/:price/:examname" element={<CheckoutWP />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
