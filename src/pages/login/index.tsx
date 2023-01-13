import Image from "next/image";
import Link from "next/link";

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


export const LoginPage = () =>{

    // Controle de exibição do formulário de cadastro
    const [isFormOpen, setIsFormOpen] = useState(false);
    const handleShowForm = () =>{
        console.log("Exibe Form");
        setIsFormOpen(!isFormOpen);
    };

    return(
        <>
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
                            <Image src={faceIcon} alt="Facebook Ícone"/>
                            Continuar com Facebook
                        </Button>

                        <Button
                            width={85}
                            color="gray-200"
                            textColor="gray-900"
                            className="outline"
                        >
                            <Image src={googleIcon} alt="Googgle Ícone"/>
                            Continuar com Googgle
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

            {/* Aqui é a "página do Login" será exibida Caso seja clicado no CTA de cadastro via email */}
            <ThemeProvider theme={defaultTheme}>
                <LoginContainer className={ isFormOpen ? "activeForm active" : "activeForm" }>
                    <LoginFigure>
                        <Image src={appIcon} alt="Crie sua conta na TicMais!"/>
                        <h2>Login</h2>
                    </LoginFigure>

                    <LoginForm>
                        <Input 
                            width={100}
                            type="text"
                            icon={<User set="bold" />}
                            placeholder="Nome"
                        />

                        <Input 
                            width={100}
                            type="email"
                            icon={<Message set="bold" />}
                            placeholder="Email"
                        />

                        <Input 
                            width={100}
                            type="password"
                            icon={<Lock set="bold" />}
                            iconRight={<Hide set="bold" />}
                            placeholder="Senha"
                        />
                        <Link href='/forgot-password'>Esqueci minha senha</Link>

                        <Button 
                            color="primary-100"
                            textColor="white"
                            className="filled"
                            width={75}
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