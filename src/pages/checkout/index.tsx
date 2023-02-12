import { CheckoutMetod } from "@/components/partials/checkout/CheckoutMethod";
import { CheckoutOrder } from "@/components/partials/checkout/CheckoutOrder";
import { CheckoutResume } from "@/components/partials/checkout/CheckoutResume";
import { CheckoutUser } from "@/components/partials/checkout/CheckoutUser";
import { Button } from "@/components/shared/Button";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Modal } from "@/components/shared/Modal";
import { AppLayout } from "@/layouts/AppLayout";
import {  CheckoutContainer, CheckoutContainerFooter, CheckoutTitle } from "@/styles/checkoutStyles";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

import checkoutSuccess from "@/assets/img/pages/chckout/checkout_success.svg";
import checkoutFailed from "@/assets/img/pages/chckout/checkout_success.svg";
import Image from "next/image";

const CheckoutPage = () => {

    // Handle Steps of Checkout
    const [step, setStep] = useState<number>(0);
    const handleStep = (numStep:number) =>{
        if(numStep >= 0 && numStep <= 3 ){
            setStep(numStep);
        }
    }

    // Handle Method of Pay
    const [payMeth, setPayMeth] = useState<string>('');
    const handlePayMethod = (paySelected:string) =>{
        setPayMeth(paySelected);
    }

    const [isModalActive, setIsModalActive] = useState(false);
    const handleModalPayment = () => {
        setIsModalActive(!isModalActive)
    }
    
    return(
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <Header />

            <AppLayout title="Checkout" >
                <CheckoutContainer className="container">
                    {
                        step === 0 ?
                            <>
                                <CheckoutTitle>
                                    Informações de Compra
                                </CheckoutTitle>
                                <CheckoutOrder 
                                    onChangePayment={handlePayMethod}
                                />
                            </>
                        :
                            step === 1 ?
                                <>
                                    <CheckoutTitle>
                                        Quem vai usar os ingressos?
                                    </CheckoutTitle>
                                    <CheckoutUser />
                                </>
                            :
                                step === 2 ?
                                    <>
                                        <CheckoutTitle>
                                            {payMeth}
                                        </CheckoutTitle>
                                        <CheckoutMetod method={payMeth} />
                                    </>
                                :
                                    <>
                                        <CheckoutTitle>
                                            Resumo da Compra
                                        </CheckoutTitle>
                                        <CheckoutResume /> 
                                    </>
                    }   

                    <CheckoutContainerFooter>
                        {
                            step > 0 &&
                            <Button 
                                width={50}
                                color="secondary-500"
                                textColor="white"
                                className="filled"
                                onClick={()=>{handleStep(step-1)}}
                            >
                                Voltar
                            </Button>
                        }
                        
                        <Button 
                            width={50}
                            color="secondary-500"
                            textColor="white"
                            className="filled"
                            onClick = {
                                step === 3 ? 
                                    handleModalPayment 
                                : 
                                    ()=>{handleStep(step+1);}
                            }
                        >
                            {step === 3 ? 'Finalizar Compra' : 'Avançar'}
                        </Button>
                    </CheckoutContainerFooter>
                </CheckoutContainer>
            </AppLayout>

            <Modal 
                imageModal={<Image src={checkoutSuccess} alt="Compra Realizada com sucesso!" width={200} height={200} />}
                title="Aprovado"
                subtitle="Você conseuiu realizar a compra!"
                textColor="#212121"
                primaryColor="#00DB72"
            	confirmText="Meus Ingressos"
                actionModal={()=>{alert("Compra confirmada")}}
                isActive={isModalActive}
                handleModal={handleModalPayment}
            />

            <Footer />

        </ThemeProvider>
    );
}

export default CheckoutPage;