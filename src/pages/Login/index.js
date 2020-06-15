import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn, FiLock } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo-4pet-300x156.png';

export default class Login extends Component {
    
    constructor() {
        super()

        document.title = '4Pet - Login'

    }
    
    render() {
        return (
            <div className="bg-container">
                <div className="login-container">
                    <section className="form">
                        <img src={logoImg} alt="4Pet"/>
    
                        <form>
                            <h1>Faça seu login</h1>
                            {/* <div className="radios">
                                <label className="radio-inline"><input type="radio" value="Sim" name="optradio" />Sou veterinário(a)</label>
                                <label className="radio-inline"><input type="radio" value="Não" name="optradio" />Sou cliente</label>
                            </div> */}
    
                            <input 
                                type="text"
                                placeholder="Digite seu usuário ou email" 
                            />
                            <input 
                                type="password"
                                placeholder="Digite sua senha"
                            />
                            <button className="button" type="submit">Entrar</button>
    
                            <p className="back-link forget-pass">
                                <FiLock size={16} color="#E02041" />
                                Esqueci minha senha
                            </p>
    
                            <Link className="back-link" to="/register">
                                <FiLogIn size={16} color="#E02041"/>
                                Não tenho cadastro
                            </Link>
                        </form>
                    </section>
    
                </div>
            </div>
        );
    }
    
}