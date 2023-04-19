import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Presentation } from "@/components/Presentation";
import Projet from "../components/Projet";
import LogoBooki from "../assets/LogoBooki.svg";
import { Footer } from "@/components/Footer";
import LogoOhMyFood from "../assets/LogoOhMyFood.svg";
import LogoPanthere from "../assets/LogoPanthere.svg";
import LogoKasa from "../assets/LogoKasa.svg";

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
            content="Ce projet consistait à réaliser un site web responsive à partir d'une maquette préexistante. Le but était de reproduire fidèlement la maquette en utilisant uniquement HTML et CSS, tout en veillant à ce que le site soit adapté à toutes les tailles d'écran (ordinateurs, tablettes et smartphones)."
          />
          <Projet
            title={LogoOhMyFood}
            lien="https://remybreton.github.io/Ohmyfood/"
            content="Pour ce projet, j'ai commencé par partir d'une maquette et l'objectif était de créer un site web responsive en utilisant uniquement HTML et SCSS. En me concentrant sur une approche mobile-first, j'ai conçu une interface utilisateur simple et facile à utiliser pour les utilisateurs mobiles. J'ai également ajouté des fonctionnalités avancées en utilisant des animations CSS pour rendre l'expérience utilisateur plus agréable et interactive."
          />
          <Projet
            title={LogoPanthere}
            lien="https://remybreton.github.io/La-panthere/"
            content="Ce projet consistait à optimiser un site web existant pour améliorer sa performance et son référencement naturel sur les moteurs de recherche. Pour ce faire, j'ai utilisé des techniques de développement web et des stratégies SEO pour maximiser la visibilité du site et améliorer son classement dans les résultats de recherche."
          />
          <Projet
            title={LogoKasa}
            lien="https://kasa-llr8yr29q-remybreton.vercel.app/"
            content="Dans le cadre de ma formation en développement web, j'ai développé une application web responsive en utilisant la bibliothèque React. Le projet a été réalisé à partir d'une maquette fournie et nécessite la mise en place de différentes fonctionnalités pour assurer une expérience utilisateur fluide et agréable."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
