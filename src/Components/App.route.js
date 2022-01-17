import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
// import { AddCompanyForm } from "./Admin/AddCompanyForm";
// import { EditCompanyForm } from "./Admin/EditCompanyForm";
// import { CompanyList } from "./Admin/CompanyList";
import { AdminDashboard } from "./Admin/AdminDashboard";
import { Statee } from "./Admin/Statee";
import { TestSeriesList } from "./Admin/TestSeriesList";
import { AddTestSeries } from "./Admin/AddTestSeries";
import { EditTestSeries } from "./Admin/EditTestSeries";
import { TestSeriesQuestions } from "./Admin/TestSeriesQuestions";
import { TestSeriesOptions } from "./Admin/TestSeriesOptions";
import PublicRoute from "./Routes/PublicRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AdminRoute from "./Routes/AdminRoute";
import { TestSeries } from "./Student/TestSeries";
import { NotFound } from "./NotFound";
import { Questions } from "./Student/Questions";
import { TestSeriesOptionsAdd } from "./Admin/TestSeriesOptionsAdd";
import { TestSeriesQuestionsAdd } from "./Admin/TestSeriesQuestionsAdd";
import { TestSeriesQuestionOptions } from "./Admin/TestSeriesQuestionOptions";
import { Result } from "./Student/Result";
export const AppRouting = (prop) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/exchange/state" element={<Statee />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route exact path="/student/test" element={<TestSeries />}></Route>
          <Route
            exact
            path="/test-series/questions/:seriesId"
            element={<Questions />}
          ></Route>
          <Route
            exact
            path="/student/test-result/:seriesId"
            element={<Result />}
          ></Route>
        </Route>
        <Route element={<AdminRoute />}>
          <Route
            exact
            path="/admin/add-series"
            element={<AddTestSeries />}
          ></Route>
          <Route
            exact
            path="/admin/get-series"
            element={<TestSeriesList />}
          ></Route>
          <Route
            exact
            path="/admin/edit-series/:seriesId"
            element={<EditTestSeries />}
          ></Route>
          <Route
            exact
            path="/admin/series-questions/:seriesId"
            element={<TestSeriesQuestions />}
          ></Route>
          <Route
            exact
            path="/admin/series-questions/:seriesId/:questionId"
            element={<TestSeriesQuestionOptions />}
          ></Route>
          <Route
            exact
            path="/admin/series-questions-add/:seriesId"
            element={<TestSeriesQuestionsAdd />}
          ></Route>
          <Route
            exact
            path="/admin/series-options/:id/:qId"
            element={<TestSeriesOptions />}
          ></Route>
          <Route
            exact
            path="/admin/series-options-add/:seriesId/:questionId"
            element={<TestSeriesOptionsAdd />}
          ></Route>
          <Route
            exact
            path="/admin/dashboard"
            element={<AdminDashboard />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
