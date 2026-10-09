import { useState } from "react";
import type { FormEvent } from "react";
import Button from "../../components/Button/Button";

import logoBIcon from "../../assets/icons/logo-b.png";
import loginHeroImage from "../../assets/images/login-hero.png";
import carta from "../../assets/icons/carta.png";
import cadeado from "../../assets/icons/cadeado.png";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook.png";
import olho from "../../assets/icons/olho.png";


import "./Login.css";

interface LoginProps {
  onLogin?: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login">
      <div className="login-inner">
        <div className="login-hero">
          <img src={loginHeroImage} alt="" className="login-hero-image" />

          <div className="login-hero-brand">
            <span className="login-hero-brand-letter">
              <img src={logoBIcon} alt="" />
            </span>
            <div className="login-hero-brand-text">
              <strong>loom</strong>
              <span>Institucional</span>
            </div>
          </div>

          <h1 className="login-hero-title">Bem estar que transforma comunidades acadêmicas.</h1>
        </div>

        <div className="login-panel">
          <div className="login-card">
            <div className="login-card-eyebrow">
              <span>Acesse sua conta</span>
              <span className="login-card-eyebrow-line"></span>
            </div>

            <h2 className="login-card-title">Que bom ter você de volta.</h2>
            <p className="login-card-subtitle">
              Entre no Bloom para acompanhar o bem-estar da sua instituição.
            </p>

            <form
              className="login-form"
              onSubmit={(event: FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                onLogin && onLogin();
              }}
            >
              
              <div className="login-password">
                <label htmlFor="Email">E-mail</label>
                <div className="login-input-wrap">
                  <img src={carta} alt="" className="login-input-icon" />
                  <input id="Email" type="text" placeholder="seuemail@instituicao.com"/>
                </div>

                <label htmlFor="Senha">Senha</label>
                <div className="login-input-wrap">
                  <img src={cadeado} alt="" className="login-input-icon" />
                  <input id="Senha" type={showPassword ? "text" : "password"} placeholder="Digite sua senha"/>
                  <button
                    type="button"
                    className="login-eye-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img src={olho} alt={showPassword ? "Ocultar senha" : "Mostrar senha"} />
                  </button>
                </div>
                
                <a href="#" className="login-forgot">
                  Esqueci a senha
                </a>
              </div>

              <div className="login-submit">
                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </div>
            </form>

            <div className="login-social">
              <Button variant="outline"><img src={google} alt="Ícone do google" />Entrar com Google</Button>
              <Button variant="outline"> <img src={facebook} alt="Ícone do facebook" />Entrar com Facebook</Button>
            </div>

            <p className="login-signup">
              Ainda não possui uma conta? <a href="#">Criar uma conta</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
