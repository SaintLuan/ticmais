import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

import { Footer } from "@/components/shared/Footer";
import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/shared/Button";
import { Input } from "@/components/form/Input";
import { LoginCta, LoginContainer, LoginDivider, LoginFigure, LoginForm, LoginOptions } from "@/styles/loginStyles";

//Images Import
import loginIlust from '@/assets/img/pages/signin/vamos-nessa.svg';
import appIcon from '@/assets/img/blue-icon.svg';

// Icons Import
import faceIcon from '@/assets/img/facebook.svg';
import googleIcon from '@/assets/img/google.svg';
import appleIcon from '@/assets/img/apple.svg';
import { Hide, Lock, Message, User } from "react-iconly";


// ThemeProvider for SigninForm
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/default";
import { useState } from "react";
import { useForm } from "@/hooks/useForm";


export const LoginPage = () =>{

    // Controle de exibição do formulário de cadastro
    const [isFormOpen, setIsFormOpen] = useState(false);
    const handleShowForm = () =>{
        setIsFormOpen(!isFormOpen);
    };

    // Handle Login - Google
    const responseMessage = (response: CredentialResponse) => {
        console.log(response);
    };
    const errorMessage = ( ) => {
        console.log("Erro ao logar-se com o Google");
    };


    // Handle Login - Facebook
    const facebookAuth = (response: any) => {
        console.log(response);
    }

    // Handle Login - Form Submit
    const initialState = {
        email: "",
        password: "",
    };

    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        // console.log(values);

        axios.post(`${process.env.API_BASE}/oauth/google/auth/signin`, values, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error.response.data.errors.message);
        });

    }

    return(
        <>
            <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH!}>
                <AppLayout title="Cadastrate-se">
                    <LoginContainer className="container">
                        <LoginFigure>
                            <Image src={loginIlust} alt="Vamos nessa? Cadastre-se agora!" />
                            <h2>Vamos nessa?</h2>
                        </LoginFigure>

                        <LoginOptions>
                            <Button
                                width={85}
                                color="gray-200"
                                textColor="gray-900"
                                className="outline"
                            >
                                {/* <Image src={faceIcon} alt="Facebook Ícone"/>
                                Continuar com Facebook */}
                                <FacebookLogin 
                                    appId={process.env.FACEBOOK_AUTH!}
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    scope="public_profile,user_friends,user_actions.books"
                                    callback={facebookAuth}
                                />
                            </Button>

                            <Button
                                width={85}
                                color="gray-200"
                                textColor="gray-900"
                                className="outline"
                            >
                                {/* <Image src={googleIcon} alt="Googgle Ícone"/>
                                Continuar com o Google */}
                                <GoogleLogin  
                                    onSuccess={responseMessage} 
                                    onError={errorMessage} 
                                />
                            </Button>

                            <Button
                                width={85}
                                color="gray-200"
                                textColor="gray-900"
                                className="outline"
                            >
                                <Image src={appleIcon} alt="Apple Ícone"/>
                                Continuar com Apple
                            </Button>

                            <LoginDivider>
                                <hr />
                                <span>ou</span>
                                <hr />
                            </LoginDivider>

                            <Button
                                width={85}
                                color="primary-500"
                                textColor="white"
                                className="filled"
                                onClick={handleShowForm}
                            >
                                Entrar com email e senha
                            </Button>

                            <LoginCta>
                                Ainda não é cadastrado?
                                <Link href='/signin'>Crie já sua conta!</Link>
                            </LoginCta>
                        </LoginOptions>
                    </LoginContainer>
                    <Footer />
                </AppLayout>
            </GoogleOAuthProvider>

            {/* Aqui é a "página do Login" será exibida Caso seja clicado no CTA de cadastro via email */}
            <ThemeProvider theme={defaultTheme}>
                <LoginContainer className={ isFormOpen ? "activeForm active" : "activeForm" }>
                    <LoginFigure>
                        <Image src={appIcon} alt="Crie sua conta na TicMais!"/>
                        <h2>Login</h2>
                    </LoginFigure>

                    <LoginForm onSubmit={onSubmit}>
                        <Input 
                            width={100}
                            type="email"
                            name="email"
                            id="email"
                            icon={<Message set="bold" />}
                            placeholder="Email"
                            onChange={onChange}
                            required
                        />

                        <Input 
                            width={100}
                            type="password"
                            name="password"
                            id="password"
                            icon={<Lock set="bold" />}
                            iconRight={<Hide set="bold" />}
                            placeholder="Senha"
                            onChange={onChange}
                            required
                        />
                        <Link href='/forgot-password'>Esqueci minha senha</Link>

                        <Button 
                            color="primary-100"
                            textColor="white"
                            className="filled"
                            width={75}
                            type='submit'
                        >
                            Login
                        </Button>
                    </LoginForm>

                    <button className="otherMetod" onClick={handleShowForm}>Selecionar outro método de cadastro.</button>
                </LoginContainer>
            </ThemeProvider>
        </>
        
    )
}

export default LoginPage;