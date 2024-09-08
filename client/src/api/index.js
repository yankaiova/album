import axios from "axios";
const BASE_URL = "http://127.0.0.1:8055/items";

export const getAlbums = async () => {
  const data = await axios.get(`${BASE_URL}/album`);
  return data.data;
};
export const getImagesByAlbum = async (id) => {
  const data = await axios.get(`${BASE_URL}/photo?filter[almubId][_eq]=${id}`);
  return data.data;
};
export const getImageById = async (id) => {
  const data = await axios.get(`${BASE_URL}/photo?filter[id][_eq]=${id}`);
  return data.data;
};
