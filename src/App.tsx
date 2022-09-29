import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContext';
import { Router } from './router';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/theme/default';
function App() {
 return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles/>
    <BrowserRouter>
      <CartContextProvider>
        <Router/>
      </CartContextProvider>
    </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
