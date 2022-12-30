import { PartnersProps } from "@/@types/partners";
import { PartnerLogo, PartnersContainer, PartnersHeader, PartnersLogos } from "./styles";

export const PartnersSection = ({ partners }: PartnersProps) =>{
    return(
        <PartnersContainer className="container">
            <PartnersHeader>
                <h2>Nossos Parceiros</h2>
                <p>
                    Tivemos o prazer de trabalhar com as melhores empresas da indústria.  <br />
                    Estas são algumas delas:
                </p>
            </PartnersHeader>

            <PartnersLogos>
                {
                    partners.map((partner) => (
                        <PartnerLogo key={partner.id}>
                            <img src={partner.logo} alt={partner.title} />
                        </PartnerLogo>
                    ))
                }
            </PartnersLogos>
        </PartnersContainer>
    );
}