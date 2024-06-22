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
      if (response.data[0].password === senha) {
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

const updateUser = async (userId, data) => {
  try {
    const response = await api.patch(`/users/${userId}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Erro ao atualizar a conta");
  }
};

const changePassword = async (userId, oldPassword, newPassword) => {
  try {
    oldPassword = generateHash(oldPassword);
    newPassword = generateHash(newPassword);
    const response = await api.get(`/users/${userId}`);
    if (response.data.password === oldPassword) {
      const updateResponse = await api.patch(`/users/${userId}`, { password: newPassword });
      return updateResponse.data;
    } else {
      throw new Error("Senha antiga incorreta.");
    }
  } catch (error) {
    throw new Error(error.response.data.message || "Erro ao atualizar a senha");
  }
};


export { login, generateHash, deleteUserAccount, updateUser, changePassword };
