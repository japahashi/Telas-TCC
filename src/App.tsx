import { useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const [screen, setScreen] = useState<"login" | "home">("login");

  if (screen === "login") {
    return <Login onLogin={() => setScreen("home")} />;
  }

  return <Home />;
}

export default App;
