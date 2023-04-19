export const Propos: React.FC = () => {
  return (
    <>
      <section className="grid p-8 mb-5 text-perso-black lg:grid-cols-2 lg:gap-28">
        <div className="mb-3">
          <h3 className="font-bold mb-3 md:text-xl lg:text-2xl">
            Je m&#39;appelle Rémy, un développeur Web junior basé à Angers.
          </h3>
          <p className="text-xs md:text-base lg:text-xl">
            Bonjour et bienvenue sur mon portfolio de développeur web. Je suis
            Rémy, un développeur web junior enthousiaste et passionné par
            l&#39;apprentissage et l&#39;amélioration continue de mes
            compétences. Je suis spécialisé dans la création de sites web
            responsives et fonctionnels , en utilisant des technologies telles
            que HTML, CSS, JavaScript, React. Je suis toujours à la recherche de
            nouveaux projets pour continuer à acquérir de l&#39;expérience et
            améliorer mes compétences. J&#39;espère que vous apprécierez mon
            travail et que nous aurons l&#39;opportunité de travailler ensemble
            dans le futur
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-3 md:text-xl lg:text-2xl">Compétences</h3>
          <p className="text-xs mb-3 md:text-base lg:text-xl">
            HTML, CSS, JavaScript, React, Git, Express, Node.js, Tailwind,
            Next.js, TypeScript, Bootstrap, mongoDB
          </p>
          <h3 className="font-bold mb-3 md:text-xl lg:text-2xl">
            Ce que j&#39;aime
          </h3>
          <p className="text-xs mb-3 md:text-base lg:text-xl">
            Ce que j&#39;apprécie particulièrement dans le développement web, c&#39;est
            la possibilité de créer des choses incroyables en quelques lignes de
            code seulement. J&#39;aime la satisfaction que cela procure de voir une
            idée de prendre vie et se concrétiser grâce à ma programmation.
          </p>
        </div>
      </section>
    </>
  );
};
