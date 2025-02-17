import axios from "axios";
export async function getAllCars() {
  const response = await axios.get("https://oreenapi.molaraiche.com/api/cars");
  return response.data.cars;
}
export const getAllComments = () => {};
export const getAllStats = () => {};
