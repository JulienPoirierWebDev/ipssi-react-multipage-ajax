import { searchBooks } from "@/services/openLibraryService";
import { useEffect, useState } from "react";

const useSearchBook = () => {
  const [recherche, setRecherche] = useState("");
  const [resultat, setResultat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const handleChange = (event) => {
    if (event.target.value === "" || event.target.value < 3) {
      setResultat(null);
    }
    setRecherche(event.target.value);

    // faire la requete et sauvegarder son résultat dans une variable résultatRecherche
  };

  const pageMax = resultat && Math.ceil(resultat.numFound / 100);
  const isPageMax = page === pageMax;

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (recherche !== "" && recherche.length >= 3) {
        console.log(pageMax, page);
        if (pageMax && page >= pageMax && pageMax != 1) {
          return;
        }
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

  return { handleChange, recherche, loading, resultat, page, setPage, isPageMax, pageMax };
};

export default useSearchBook;
