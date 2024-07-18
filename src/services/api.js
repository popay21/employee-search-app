export const getEmployees = async (company) => {
  const response = await fetch(`https://randomuser.me/api/?results=10&seed=${company}`);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return response.json();
};