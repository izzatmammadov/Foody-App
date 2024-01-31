import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../share/components/Navbar";
import { ClientLogInForm } from "@/share/components/clientLoginForm";

const Login: NextPage = () => {
 
  return (
    <>
      <Head>
        <title>Foody | Log in</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mainBurger.svg" />
      </Head>

      <Navbar isRegister={false} forLogin={true} forAdmin={true} />

      <main>
        <ClientLogInForm/>
      </main>
    </>
  );
};

export default Login;
