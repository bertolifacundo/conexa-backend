const paginate = async (items, page = 1, perPage = 10) => {
  const validPageAndPerPage =
    Number.isInteger(Number(perPage)) && Number.isInteger(Number(page));
  if (!validPageAndPerPage) {
    throw new Error('Parametros incorrectos');
  }
  const offset = perPage * (page - 1);
  const totalPages = Math.ceil(items.length / perPage);
  const paginatedItems = items.slice(offset, perPage * page);
  return {
    previousPage: Number(page) - 1 ? Number(page) - 1 : null,
    nextPage: totalPages > Number(page) ? Number(page) + 1 : null,
    total: items.length,
    totalPages: totalPages,
    items: paginatedItems,
  };
};
module.exports = { paginate };
