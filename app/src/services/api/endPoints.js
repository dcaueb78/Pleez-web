const dishesDetails = '/dishes-details';
const sessions = 'sessions';
const users = 'users';
const order = 'order';

const restaurantDetails = restaurant_id => {
  return `restaurant/${restaurant_id}`;
};
const categoriesFromRestaurantId = restaurant_id => {
  return `category/${restaurant_id}`;
};
const dishDetails = dish_id => {
  return `dish-details/${dish_id}`;
};

const allDishesFromCategoryId = category_id => {
  return `dish/${category_id}`;
};

export {
  dishesDetails,
  sessions,
  users,
  categoriesFromRestaurantId,
  restaurantDetails,
  dishDetails,
  allDishesFromCategoryId,
  order
};
