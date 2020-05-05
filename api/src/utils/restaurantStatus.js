const status = {
  paused: 0,
  working: 1
};

const getUpdatedRestaurantStatus = restaurantStatus =>
  restaurantStatus === status.paused ? status.working : status.paused;

export { status, getUpdatedRestaurantStatus };
