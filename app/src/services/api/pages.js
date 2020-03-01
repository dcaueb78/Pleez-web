const base = '/';
const infos = '/informacoes';
const basket = '/comanda';

const categoryBaseRoute = '/categorias';
const dishBaseRoute = '/pratos';
const detailsBaseRoute = '/detalhes';

const category = (restaurantId, chair) =>
  `${categoryBaseRoute}/${restaurantId}/${chair}`;

export { infos, basket, category, base, categoryBaseRoute, dishBaseRoute, detailsBaseRoute };
