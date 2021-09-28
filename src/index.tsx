import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';

import { DAppProvider } from "@usedapp/core";

declare global {
  interface Window {
    web3: Web3;
    contract: Contract;
  }
}

window.contract = window.contract || {};
window.web3 = window.web3 || {};

ReactDOM.render(
  <React.StrictMode>
    {/*
        Wrap our app in the provider, config is required,
        but can be left as an empty object:
    */}
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
