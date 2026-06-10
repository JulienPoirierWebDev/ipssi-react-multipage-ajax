import CardMedia from "../components/CardMedia";
import filmPNG from "./../assets/icons/film.png";
import livrePNG from "./../assets/icons/livre.png";
import seriePNG from "./../assets/icons/serie.png";
import styles from "./PageAccueil.module.css";

const PageAccueil = () => {
  const media = [
    {
      content: "Livres",
      src: livrePNG,
    },
    {
      content: "Films",
      src: filmPNG,
    },
    {
      content: "Series",
      src: seriePNG,
    },
  ];

  return (
    <>
      <main>
        <h1 className={styles.title}>Bienvenu sur notre site pour rechercher des média !</h1>

        <div>
          <h2 className={styles.subtitle}>Voici ce que vous pourrez rechercher ici :</h2>
          <ul className={styles.container}>
            {media.map((medium) => (
              <CardMedia key={medium.src} medium={medium} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default PageAccueil;
