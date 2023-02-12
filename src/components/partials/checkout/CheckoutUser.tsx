import { Input } from "@/components/form/Input";
import { CheckoutBuyer, CheckoutDesc } from "@/styles/checkoutStyles";


export const CheckoutUser = () => {
    return(
        <CheckoutDesc>
            <CheckoutBuyer>
                <form action="">
                    <Input  
                        width={100}
                        type='text'
                        placeholder="Nome do titular"
                        value='Pedro Queiroz'
                    />

                    <aside>
                        <Input 
                            width={50}
                            type='text'
                            placeholder="CPF"
                            value='000.000.000-00'
                        />

                        <Input 
                            width={50}
                            type='text'
                            value='12/27/1995'
                        />
                    </aside>
                </form>
            </CheckoutBuyer>
        </CheckoutDesc>
    );
}