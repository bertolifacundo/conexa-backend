const paginate = async (items, page = 0) => {
  const validPageAndPerPage = Number.isInteger(Number(page));
  if (!validPageAndPerPage) {
    throw new Error('Parametros incorrectos');
  }
  const pageNumber = Number(page);
  const paginatedItems = items;
  return {
    previousPage: pageNumber > 0 ? pageNumber - 1 : 0,
    nextPage: pageNumber ? pageNumber + 1 : 0,
    total: items.length,
    items: paginatedItems,
  };
};
module.exports = { paginate };
