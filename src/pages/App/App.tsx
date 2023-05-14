// Pacakages
import { Fragment } from "react";

// Components
import { Navbar, Routes } from "@components/index";
import ShoppingCartProvider from "@context/index";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Fragment>
        <Navbar />
        <Routes />
      </Fragment>
    </ShoppingCartProvider>
  );
};

export default App;
