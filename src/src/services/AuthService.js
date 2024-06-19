import api from "./api";
import CryptoJS from "crypto-js";

const generateHash = (inputString) => {
  return CryptoJS.SHA256(inputString).toString(CryptoJS.enc.Hex);
};

const login = async (email, senha) => {
  try {
    senha = generateHash(senha);
    const response = await api.get(`/users?email=${email}`);
    if (response.data.length > 0) {
      if (response.data[0].password == senha) {
        return response.data[0];
      } else {
        throw new Error("Email ou senha inválidos, tente novamente.");
      }
    } else {
      throw new Error("Email ou senha inválidos");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUserAccount = async (userId) => {
  try {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Erro ao deletar a conta");
  }
};

export { login, generateHash, deleteUserAccount };