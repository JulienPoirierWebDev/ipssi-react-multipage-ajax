const SearchNavigation = ({ page, setPage, isPageMax, pageMax }) => {
  return (
    <>
      {page > 1 && (
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Précédent
        </button>
      )}
      {!isPageMax && (
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Suivant
        </button>
      )}

      <p>
        Page {page} sur {pageMax}
      </p>
    </>
  );
};

export default SearchNavigation;
