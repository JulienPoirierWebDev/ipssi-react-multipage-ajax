import SearchNavigation from "@/components/SearchNavigation";
import CardBook from "../components/CardBook";
import useSearchBook from "./../hooks/useSearchBook.js";

const PageRechercheLivre = () => {
  const { handleChange, recherche, loading, resultat, page, setPage, isPageMax, pageMax } =
    useSearchBook();

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
          <SearchNavigation page={page} setPage={setPage} isPageMax={isPageMax} pageMax={pageMax} />
        )}

        {resultat &&
          !loading &&
          resultat.docs?.map((book) => {
            return <CardBook key={book.key} book={book} />;
          })}
      </div>
    </>
  );
};

export default PageRechercheLivre;
