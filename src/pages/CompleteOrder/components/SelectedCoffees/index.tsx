import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffesContainer } from "./styles";

export function SelectedCoffees(){
    const { cartItens } = useCart();
    return(
        <SelectedCoffesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>
            <DetailsContainer>
                {cartItens.map(item => (
                    <CoffeeCartCard key={item.id} coffee={item}/>
                ))}
                
                
                <ConfirmationSection/>
            </DetailsContainer>
        </SelectedCoffesContainer>
    );
}