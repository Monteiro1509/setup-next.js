import React from "react";
import Head from "../../node_modules/next/head";

import SetupLogo from '../assets/img/logos/icons-setup-64.svg'

const Home: React.FC = () =>{
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <SetupLogo />
        <h1>Setup Nextjs</h1>
      </main>
    </div>
  );
}

export default Home;
