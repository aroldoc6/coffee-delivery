
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../util/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5; 

export function ConfirmationSection() {
    const { cartItensTotal, cartQuantity } =  useCart();
    const cartTotal = DELIVERY_PRICE + cartItensTotal;

    const  formattedItensTotal = formatMoney(cartItensTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

   
    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ {formattedItensTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R$ {formattedDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">R$ {formattedCartTotal}</RegularText>
            </div>
           <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} type="submit"/>
        </ConfirmationSectionContainer>
    );
}