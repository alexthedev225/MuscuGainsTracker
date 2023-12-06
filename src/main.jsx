import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { EntrainementProvider } from "./context/EntrainementContext.jsx";
import NavBar from "./components/Navbar.jsx";
import Profil from "./pages/Profil.jsx";
import EnregistrementEntrainementForm from "./components/EnregistrementEntrainementForm.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <EntrainementProvider >
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/entrainement" element={<EnregistrementEntrainementForm />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/connexion" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </EntrainementProvider>
  </RecoilRoot>
);
