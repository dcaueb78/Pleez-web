import React, { useState, useEffect } from 'react';

import api from '~/config/api';
import { categoriesFromRestaurantId } from '~/services/api/endPoints';

// import { Container } from './styles';
import FoodCard from '~/components/FoodCard';

export default function CategoriesCards({ restaurant }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function findAllCategoriesFromSelectedRestaurant(restaurant_id) {
      const response = await api.get(categoriesFromRestaurantId(restaurant_id));
      setCategories(response.data);
    }

    findAllCategoriesFromSelectedRestaurant(restaurant);
  }, [restaurant]);

  return (
    <>
      {categories.length > 0 ? (
        <>
          {categories.map(category => (
            <FoodCard
              key={category.id}
              name={category.name}
              alt={category.name}
              redirect={`/pratos/${restaurant}/${category.id}`}
              backgroundImageUrl={category.image_url}
            />
          ))}
        </>
      ) : (
        <div>
          <span>O restaurante não possui nenhuma categoria</span>
        </div>
      )}
    </>
  );
}
