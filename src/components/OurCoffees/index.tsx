import { OurCoffeesContainer } from "../../pages/OurCoffees/styles";
import { TitleText } from "../Typography";



export function OurCoffees(){
    return(
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>
        </OurCoffeesContainer>
    )
}