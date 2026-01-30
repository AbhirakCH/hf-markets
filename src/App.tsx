import Home from "@/pages/Home";
import "@/App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
