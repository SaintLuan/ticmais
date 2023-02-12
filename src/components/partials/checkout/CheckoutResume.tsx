import { LocalGradient } from "@/assets/icons"
import { CheckoutBuyerResume, CheckoutDesc, CheckoutDescInfos, CheckoutInfosResume, CheckoutTicket, CheckoutTickets, CreditCardResmume } from "@/styles/checkoutStyles"
import Image from "next/image"
import { Heart } from "react-iconly";

import masterCard from '@/assets/img/payment-methods/mastercard.svg';

export const CheckoutResume = () => {
    return(
        <CheckoutDesc>
            <CheckoutDescInfos>
                <CheckoutTickets>
                    <CheckoutTicket> 
                        <figure>
                            <Image src='https://static-meuevento.s3.dualstack.us-east-1.amazonaws.com/event/e95a8e55-485f-4919-bdd3-7ba0fe34e921-imageWeb.jpg' width={100} height={100} alt='' />
                        </figure>

                        <aside>
                            <h2>Ícaro e Gilmar</h2>
                            <h3>14 de Abril - 13:00 - 15:00</h3>
                            <footer>
                                <h4>
                                    <LocalGradient />
                                    Grand Park, New York
                                </h4>
                                <Heart />
                            </footer>
                        </aside>
                    </CheckoutTicket>
                </CheckoutTickets>

                <CheckoutBuyerResume>
                    <article>
                        <h3>Nome Completo</h3>
                        <h4>Pedro Queiroz</h4>
                    </article>

                    <article>
                        <h3>Email</h3>
                        <h4>pedro@ticmais.com</h4>
                    </article>

                    <article>
                        <h3>Nacimento</h3>
                        <h4>01/01/1995</h4>
                    </article>
                </CheckoutBuyerResume>

                <CreditCardResmume>
                    <Image src={masterCard} alt="Cartão selecionado" width={300} height={300} />
                    <h3>•••• •••• •••• 4589</h3>
                </CreditCardResmume>
            </CheckoutDescInfos>

            <CheckoutInfosResume>
                <article>
                    <h4>
                        Inteira + Alimento
                        <span>R$ 50,00</span>
                    </h4>

                    <h4>
                        Inteira + Alimento
                        <span>R$ 50,00</span>
                    </h4>

                    <h4>
                        Taxa
                        <span>R$ 5,00</span>
                    </h4>
                </article>

                <footer>
                    <h4>
                        Total
                        <span>R$ 55,00</span>
                    </h4>
                </footer>
            </CheckoutInfosResume>
        </CheckoutDesc>
    )
}