import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayouts";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";
import { OrderConfirmePage } from "./pages/OrderConfirmed";

export function Router(){
    return (
        <Routes>
           <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/completeOrder" element={<CompleteOrderPage/>}/>
            <Route path="/OrderConfirmed" element={<OrderConfirmePage/>}/>
           </Route>
        </Routes>
    )
}