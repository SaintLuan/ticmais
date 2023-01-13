import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { AppLayout } from "@/layouts/AppLayout";
import { ForgotPassContainer, ForgotPassFormSelect, ForgotPassImage, ForgotPassLeft, ForgotPassRight } from "@/styles/ForgotPassStyles";
import Image from "next/image";

import imageForgot from '@/assets/img/pages/signin/forgot-pass.svg';
import { Button } from "@/components/shared/Button";
import { MailGradient, SmsGradient } from "@/assets/icons";

export const ForgotPassword = () =>{ 
    return(
        <AppLayout>
            <Header />
            <ForgotPassContainer>
                <ForgotPassLeft>
                    <ForgotPassImage>
                        <Image width={350} height={350} src={imageForgot} alt="Selecione como devemos te enviar os detalhes pora recuperar a senha:"/>
                    </ForgotPassImage>

                    <h2>
                        Selecione como devemos te enviar os detalhes pora recuperar a senha:
                    </h2>
                </ForgotPassLeft>

                <ForgotPassRight>
                    <ForgotPassFormSelect>
                        <form action="">
                            <fieldset>
                                <SmsGradient />
                                <input type="radio" name="selectRecupera" id="sms" value="sms" />
                                <label htmlFor="sms">
                                    via SMS:
                                    <span >+1 111 ******99</span>
                                </label>
                            </fieldset>

                            <fieldset>
                                <MailGradient />
                                <input type="radio" name="selectRecupera" id="email" value="email" />
                                <label htmlFor="email">
                                    via Email:
                                    <span >pedr***@ticmais.com</span>
                                </label>
                            </fieldset>

                            <Button
                                className="filled"
                                color="primary-500"
                                textColor="white"
                                width={85}
                            >
                                Continuar
                            </Button>
                        </form>
                    </ForgotPassFormSelect>
                </ForgotPassRight>
            </ForgotPassContainer>
            <Footer />
        </AppLayout>
    );
}

export default ForgotPassword;