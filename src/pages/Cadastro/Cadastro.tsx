import { useState } from "react";
import type { FormEvent } from "react";
import Button from "../../components/Button/Button";
import logoBIcon from "../../assets/icons/logo-b.png";
import loginHeroImage from "../../assets/images/login-hero.png";
import "./Cadastro.css"
function Cadastro() {

    return (

        <div className="cadastro">
            <div className="cadastro-inner">
                <div className="cadastro-hero">
                    <img src={loginHeroImage} alt="" className="cadastro-hero-image" />

                    <div className="cadastro-hero-brand">
                        <span className="cadastro-hero-brand-letter">
                            <img src={logoBIcon} alt="" />
                        </span>
                        <div className="cadastro-hero-brand-text">
                            <strong>loom</strong>
                            <span>Institucional</span>
                        </div>
                    </div>

                    <h1 className="cadastro-hero-title">Bem estar que transforma comunidades acadêmicas.</h1>
                </div>

                <div className="cadastro-panel">
                    <div className="cadastro-card">
                        <div className="cadastro-card-eyebrow">
                            <span>Criação de conta</span>
                            <span className="cadastro-card-eyebrow-line"></span>
                        </div>

                        <h2 className="cadastro-card-title">Criar acesso institucional</h2>
                        <p className="cadastro-card-subtitle">
                            Primeiro vamos criar sua conta
                        </p>

                        <form
                            className="cadastro-form"
                            onSubmit={(event: FormEvent<HTMLFormElement>) => {
                                event.preventDefault();
                            }}
                        />
                        <div className="cadastro-steps">
                            <div>
                                1
                            </div>
                            <p>
                                Seus dados
                            </p>
                            <span className="cadastro-card-eyebrow-line"></span>
                            <p>
                                Sua instituição
                            </p>
                            <span className="cadastro-card-eyebrow-line"></span>
                            <p>
                                Seu acesso
                            </p>
                        </div>
                        <div className="cadastro-input-nome">
                            <label htmlFor="nome">Nome completo</label>
                            <input type="text" placeholder="Seu nome" />
                        </div>
                        <div className="cadastro-input-email-cargo">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" placeholder="seuemail@instituicao.com" />
                            <label htmlFor="Cargo">Cargo</label>
                            <input type="text" placeholder="Coordenadora" />
                        </div>
                        <div className="cadastro-submit">
                            <Button variant="primary" type="submit">
                                Avançar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cadastro;