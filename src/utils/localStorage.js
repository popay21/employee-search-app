export const getFavorites = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const setFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};