import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { CartContextProvider } from "./context/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
          <GlobalStyle />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
