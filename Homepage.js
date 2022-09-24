import * as React from 'react';

import {Link, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useNavigate } from "react-router-dom";

import imagem_trabalho from "./images/imagem_trabalho.png"
import arte_novo from "./images/arte_novo.png"
import logo from "./images/logo.png"

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

function Homepage() {
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    const navigate = useNavigate();
    const registrar = () => {
        navigate("/register");
    }
    const logar = () => {
        navigate("/login");
    }
    return (
        <><div className="split left">
            <div className="centered">
                <img src={logo} className="logo"/>
                <img src={arte_novo} className="arte" />
                <div className="texto-padrao">
                    <h4 style={{marginBottom: "25px"}}>Bem-vindo de volta!</h4>
                </div>

                <div className="texto-padrao" style={{ textAlign: "left" }}>
                    <h5 style={{ marginBottom: "10px" }}>Iniciar sessão:</h5>
                </div>

                <TextField className="input"
                    margin="normal"
                    size="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant={"filled"}
                    placeholder="email@email.com"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} />

                <TextField className="input"
                    marginTop="15px"
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="senha"
                    id="senha"
                    variant={"filled"}
                    placeholder="******"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }} />

                <Button
                    style={{margin: "10px"}}
                    background-color="#ffffff"
                    variant="contained"
                    size={"large"}
                    endIcon={<ArrowForwardIcon />}
                    onClick={logar}>

                    Entrar</Button>

                <div className="texto-padrao mini">
                    <h5 style={{ marginTop: "8px"}}>Não possui cadastro? <Link href={"/register"} onClick={registrar}><a>Clique aqui</a></Link></h5>
                </div>

            </div>
        </div>

        <div className="split right">
        <div className="centered">
            <img src={imagem_trabalho} className="image" />
        </div>
        </div></>
        
    
    );
}

export default Homepage;