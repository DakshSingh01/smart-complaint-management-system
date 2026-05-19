import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ComplaintForm from "./pages/ComplaintForm";
import ComplaintList from "./pages/ComplaintList";
import ComplaintDetails from "./pages/ComplaintDetails";
import UpdateComplaint from "./pages/UpdateComplaint";
import AIAnalysis from "./pages/AIAnalysis";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/create-complaint"
          element={<ComplaintForm />}
        />

        <Route
          path="/complaints"
          element={<ComplaintList />}
        />

        <Route
          path="/complaint/:id"
          element={<ComplaintDetails />}
        />

        <Route
          path="/update-complaint/:id"
          element={<UpdateComplaint />}
        />

        <Route
          path="/ai-analysis"
          element={<AIAnalysis />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;