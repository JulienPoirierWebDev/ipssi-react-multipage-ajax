const searchBooks = async (recherche, page = 1) => {
  try {
    const reponse = await fetch(`https://openlibrary.org/search.json?q=${recherche}&page=${page}`);

    const data = await reponse.json();

    return data;
  } catch (error) {
    return { error: error };
  }
};

export { searchBooks };
