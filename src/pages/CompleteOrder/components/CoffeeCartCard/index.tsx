import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from 'phosphor-react';
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../util/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartProps{
    coffee: CartItem
}
export function CoffeeCartCard({ coffee}: CoffeeCartProps){
    const {changeCartItemQuantity, removeCartItem} = useCart();

    function handleIncrease(){
        changeCartItemQuantity(coffee.id, "increase");
    }

    function handlDecrease(){
        changeCartItemQuantity(coffee.id, "decrease");
    }

    function handleRemove(){
        removeCartItem(coffee.id);
    }
    const coffeeTotal = coffee.price * coffee.quantity;

    const formattedPrice = formatMoney(coffeeTotal);
    return(
        <CoffeeCartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} />
                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" onIncrease={handleIncrease} onDecrease={handlDecrease} quantity={coffee.quantity}/>
                        <RemoveButton onClick={handleRemove}>
                            <Trash size={16}/>
                             Remover
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>{formattedPrice}</p>
        </CoffeeCartCardContainer>
    );
}