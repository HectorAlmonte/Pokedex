import React from "react";
import Main from "./components/Main/Main";
import { Layout } from "./components/layouts/Layout";
function PokeApp() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default PokeApp;
