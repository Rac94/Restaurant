// Importar las librerías de ReactJS necesarias
import React from 'react';
import ReactDOM from 'react-dom';

// Definir el componente para mostrar un restaurante
function Restaurant({ name, description, address, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{address}</p>
      <img src={image} alt={name} />
    </div>
  );
}

// Definir el componente para la lista de restaurantes
function RestaurantList() {
  const restaurants = [
    {
      name: "Restaurante 1",
      description: "Descripción del restaurante 1",
      address: "Dirección del restaurante 1",
      image: "imagen1.jpg"
    },
    {
      name: "Restaurante 2",
      description: "Descripción del restaurante 2",
      address: "Dirección del restaurante 2",
      image: "imagen2.jpg"
    },
    // Añadir más restaurantes aquí
  ];

  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Restaurant key={index} {...restaurant} />
      ))}
    </div>
  );
}

// Renderizar el componente RestaurantList en el elemento con el ID "restaurantList"
ReactDOM.render(<RestaurantList />, document.getElementById('restaurantList'));
