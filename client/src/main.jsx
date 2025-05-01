import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains"; 
import { NextUIProvider } from "@nextui-org/react";
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
  activeChain={Sepolia}
  clientId="45cdc3e09127f4f6fc3b6d0655d05b57"
  autoConnectTimeout={10000}
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
  >
    <Router>
      <StateContextProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>,
);
