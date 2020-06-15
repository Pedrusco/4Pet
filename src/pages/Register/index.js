import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo-4pet-280x136.png';

export default class Register extends Component {

    constructor() {
        super()
        document.title = '4Pet - Cadastro'

        this.state = {
            formVet: false,
            formCli: false
        }
    }

    showFormVet() {
        this.setState({
            formVet: !this.state.formVet,
            formCli: false
        })
    }

    showFormCli() {
        this.setState({
            formCli: !this.state.formCli,
            formVet: false
        })
    }
    
    render() {
        let classNameVet = "button"
        let classNameCli = "button"
        if (this.state.formVet === true) {
            classNameVet += " button-active";
        }
        if (this.state.formCli === true) {
            classNameCli += " button-active";
        }

        return (
            <div className="bg-clean-4pet">
                <div className="register-container">
                    <div className="content">
                        <section>
                            <img src={logoImg} alt="4Pet"/>
    
                            <h1>Cadastro</h1>
                            <p>Faça seu cadastro sendo um veterinário ou cliente. Entre na platorma e encontre o melhor horário para o seu animal.</p>
    
                            <Link className="back-link" to="/">
                                <FiArrowLeft size={16} color="#E02041"/>
                                Voltar para login
                            </Link>
                        </section>
                        <div className="forms">
                            <div className="button-forms">
                                <button className={classNameVet} onClick={() => this.showFormVet()}>Sou Veterinário(a)</button>
                                <button className={classNameCli} onClick={() => this.showFormCli()}>Sou Cliente</button>
                            </div>
                            <form> 
                                {
                                    this.state.formVet?
                                        <>
                                            <input
                                                type="text" 
                                                placeholder="Nome completo" 
                                            />

                                            <input 
                                                type="email" 
                                                placeholder="Email"
                                            />

                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    placeholder="Digite seu CPF"
                                                />

                                                <input
                                                    type="text"
                                                    placeholder="CRM"
                                                />
                                            </div>

                                            <input
                                                type="text"
                                                placeholder="Digite sua área de atuação"
                                            />

                                            <input 
                                                type="password" 
                                                placeholder="Defina uma senha"
                                                name="password"
                                            />
                                            
                                            <button className="button" type="submit">Cadastrar</button>
                                        </>
                                    :null
                                }

                                {
                                    this.state.formCli?
                                        <>
                                             <input
                                                type="text" 
                                                placeholder="Nome completo" 
                                            />

                                            <input 
                                                type="email" 
                                                placeholder="Email"
                                            />

                                            <input 
                                                type="password" 
                                                placeholder="Defina uma senha"
                                                name="password"
                                            />

                                            <button className="button" type="submit">Cadastrar</button>
                                        </>
                                    :null
                                }
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        );
    }

}