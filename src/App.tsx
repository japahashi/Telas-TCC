import { useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";

function App() {
const [screen, setScreen] = useState<"login" | "home" | "cadastro">("cadastro");

if (screen === "login") {
return <Login onLogin={() => setScreen("home")} />;
}

if (screen === "home") {
return <Home />;
}

if (screen === "cadastro") {
return <Cadastro />;
}

return null;
}

export default App;
