import { coffees } from "../../components/data/coffees";
import { TitleText } from "../../components/Typography";
import { CoffeeCard } from "../Home/components/CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees(){
    return(
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>

            <CoffeeList>
                {coffees.map((coffees) => (
                    <CoffeeCard key={coffees.id} coffee={coffees}/>
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}