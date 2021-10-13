// import './App.css';
import Home from "./page/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./component/Font";
import Theme from "./component/Theme";
function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Fonts />
      <Home />
    </ChakraProvider>
  );
}

export default App;
