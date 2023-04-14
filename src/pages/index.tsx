import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Presentation } from "@/components/Presentation";
import Projet from "../components/Projet";
import LogoBooki from "../assets/LogoBooki.svg";
import { Footer } from "@/components/Footer";
import LogoOhMyFood from "../assets/LogoOhMyFood.svg";
import LogoPanthere from "../assets/LogoPanthere.svg";
import LogoKasa from "../assets/LogoKasa.svg"
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Rémy Breton</title>
      </Head>
      <Navbar />
      <main>
        <Presentation />
        <section>
          <Projet
            title={LogoBooki}
            lien="https://remybreton.github.io/Booki/"
            content="Booki a été le premier projet de la formation. Le but consistait à transformer une maquette en un site Web avec HTML et CSS."
          />
          <Projet
            title={LogoOhMyFood}
            lien="https://remybreton.github.io/Ohmyfood/"
            content="OhMyFood était le deuxième projet de la formation. Le but était transformer une maquette et de la dynamiser une page web avec des animations CSS et une approche mobile first en HTML et CSS."
          />
          <Projet
            title={LogoPanthere}
            lien="https://remybreton.github.io/La-panthere/"
            content="La panthère a été le troisième projet de la formation. Il s'agissait d'optimiser un site existant en vue d'améliorer son référencement."
          />
          <Projet title={LogoKasa} lien="https://kasa-llr8yr29q-remybreton.vercel.app/" content="Kasa était le projet final pendant la formation. Le but était de Créer une application web de location immobilière avec React"/>
        </section>
      </main>
      <Footer />
    </>
  );
}
