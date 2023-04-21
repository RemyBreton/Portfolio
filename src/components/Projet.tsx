/* Projet.tsx component */

// import NextPage generic type
import { NextPage } from "next";

import Image from "next/image";

// Props interface
// with title lien set to string
interface Props {
  titleLogo: string;
  lien: string;
  content: string;
}

// Defining NextPage as
// type for Projet component
// and defining type for props
const Projet: NextPage<Props> = (props) => {
  // using destructuring to get title , lien and content
  const { titleLogo } = props;
  const { lien } = props;
  const { content } = props;

  return (
    <>
      <div className="mb-5">
        <div className="border border-perso-white3 mx-5 mb-5 md:mx-20 md:mb-7 lg:mx-40 lg:mb-10"></div>
        <div className="md:px-10 lg:px-20">
          <div className="mb-3 lg:mb-9">
            <Image src={titleLogo} alt="logo" className="pl-2 mb-4 lg:mb-8" />
            <p className="text-xs pr-5 text-perso-black pl-2 md:text-base lg:text-2xl">
              {content}
            </p>
          </div>
          <div className="text-end">
            <a href={lien} className="text-xs pr-5 md:text-sm lg:text-base">
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// export component
export default Projet;
