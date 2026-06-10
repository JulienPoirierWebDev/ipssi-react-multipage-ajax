const searchBooks = async (recherche) => {
  try {
    const reponse = await fetch(`https://openlibrary.org/search.json?q=${recherche}&page=1`);

    const data = await reponse.json();

    return data;
  } catch (error) {
    return { error: error };
  }
};

export { searchBooks };
