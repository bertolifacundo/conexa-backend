const paginate = async (items, page = 1) => {
  const validPageAndPerPage = Number.isInteger(Number(page));
  if (!validPageAndPerPage) {
    throw new Error('Parametros incorrectos');
  }
  const paginatedItems = items;
  return {
    previousPage: Number(page) - 1 ? Number(page) - 1 : null,
    nextPage: Number(page) ? Number(page) + 1 : null,
    total: items.length,
    items: paginatedItems,
  };
};
module.exports = { paginate };
