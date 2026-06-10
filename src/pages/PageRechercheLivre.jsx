import { useEffect, useState } from "react";
import CardBook from "../components/CardBook";
import { searchBooks } from "../services/openLibraryService";

const PageRechercheLivre = () => {
  console.log("JE SUIS RENDER");
  const [recherche, setRecherche] = useState("");
  const [resultat, setResultat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const handleChange = (event) => {
    setResultat(null);
    setRecherche(event.target.value);

    // faire la requete et sauvegarder son résultat dans une variable résultatRecherche
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (recherche !== "" && recherche.length >= 3) {
        setLoading(true);
        const data = await searchBooks(recherche, page);
        if (recherche !== "") {
          setResultat(data);
          setLoading(false);
        }
      }
    }, 400);

    return () => {
      setLoading(false);
      clearInterval(timer);
    };
  }, [recherche, page]);

  return (
    <>
      <h1>Rechercher un livre ?</h1>

      <p>Vous êtes au bon endroit !</p>

      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="recherche">Votre recherche</label>
          <input
            className="bg-white "
            type="text"
            id="recherche"
            name="recherche"
            onChange={handleChange}
          />
          {recherche !== "" && <p>Ma recherche est : {recherche}</p>}
        </form>
        {loading && <p>Chargement</p>}

        {resultat && (
          <>
            <button
              onClick={() => {
                if (page > 1) {
                  setResultat(null);
                  setPage(page - 1);
                }
              }}
            >
              Précédent
            </button>
            <button
              onClick={() => {
                setResultat(null);
                setPage(page + 1);
              }}
            >
              Suivant
            </button>

            {page}
          </>
        )}
        {resultat &&
          resultat.docs?.map((book) => {
            return <CardBook key={book.key} book={book} />;
          })}
      </div>
    </>
  );
};

export default PageRechercheLivre;
