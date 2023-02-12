import { Input } from "@/components/form/Input";
import { CheckoutDesc, CreditCard, CreditContainer } from "@/styles/checkoutStyles";
import Image from "next/image";
import React, { useState } from "react";

const cardBg = '/assets/vector-card.png';
import masterCard from '@/assets/img/payment-methods/mastercard.svg';
import amazonIcon from '@/assets/img/payment-methods/amazon.svg';

interface MethodProps {
    method: string;
}

const PixMethod = () => {
    return(
        <>
        
        </>
    );
}

const CreditCardMethod = () => {
    // Handle CardInfos and Display on Card
    const [nameCard, setNameCard] = useState<string>('Pedro Queiroz');
    const [numberCard, setNumberCard] = useState<string>('');
    const [dateCard, setDateCard] = useState<string>('');
    const [cvvCard, setCvvCard] = useState<string>('');

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNameCard(e.target.value);
    }

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNumberCard(e.target.value);
    }

    const handleCvvNumber = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setCvvCard(e.target.value);
    }

    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setDateCard(e.target.value);
    }
     
    return(
        <CreditContainer>
            <form action="">
                <aside>
                    <label htmlFor="nameCard">Nome</label>
                    <Input 
                        name="nameCard"
                        width={100}
                        value="Pedro Queiroz"
                        onChange={handleChangeName}
                    />
                </aside>

                <aside>
                    <label htmlFor="nameCard">Número do Cartão</label>
                    <Input 
                        name="numberCard"
                        width={100}
                        mask="9999 9999 9999 9999"
                        placeholder="0000 0000 0000 0000"
                        onChange={handleChangeNumber}
                    />
                </aside>

                <footer>
                    <aside>
                        <label htmlFor="nameCard">Expiração</label>
                        <Input 
                            name="expCard"
                            width={100}
                            mask="99/99"
                            placeholder="09/26"
                            onChange={handleChangeDate}
                        />
                    </aside>

                    <aside>
                        <label htmlFor="nameCard">CVV</label>
                        <Input 
                            name="cvvCard"
                            width={100}
                            mask="999"
                            placeholder="999"
                            onChange={handleCvvNumber}
                        />
                    </aside>
                </footer>
            </form>

            <CreditCard bgImage={cardBg} >
                <header>
                    <h2>MasterCard</h2>
                    <Image src={amazonIcon} alt="MasterCard" width={300} height={300}/>
                </header>

                <section className="cardNumber">
                    <span className={ numberCard.length > 0 ? 'active' : ''}>
                        { numberCard.length > 0 ? numberCard : "•••• •••• •••• ••••"}
                    </span>
                </section>

                <footer>
                    <aside className="nameCard">
                        <h3>{nameCard.length > 0 ? nameCard : 'Card Holder Name'}</h3>
                        <h4 className={cvvCard.length > 0 ? 'activce' : ''}>
                            {cvvCard.length > 0 ? cvvCard : '•••'}    
                        </h4>
                    </aside>

                    <aside className="expireDateCard">
                        <h3>Vencimento</h3>
                        <h4 className={dateCard.length > 0 ? 'active' : ''}>
                            {dateCard.length > 0 ? dateCard : '••/••'}
                        </h4>
                    </aside>

                    <aside className="logoCard">
                        <Image src={masterCard} alt="Mastercard" width={300} height={300} />
                    </aside>
                </footer>
            </CreditCard>
        </CreditContainer>
    );
}

const renderSwitch = (method:string) => {
    switch(method){
        case 'PIX':
            return <PixMethod />
        break;

        case 'Cartão de Crédito':
            return <CreditCardMethod />
        break;
    }
}

export const CheckoutMetod = ({ method }:MethodProps) => {
    return(
        <CheckoutDesc>
            {renderSwitch(method)}
        </CheckoutDesc>
    )
}