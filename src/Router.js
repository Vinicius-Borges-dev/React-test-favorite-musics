import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import ErrorPage from "./Pages/ErrorPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
