import axios from "axios";

const baseUrl = "https://reqres.in/";

export const getUsers = () => {
  return axios
    .get(baseUrl + "api/users?page")
    .then(({ data }) => {
      console.log("getUsers", data);

      return data;
    })
    .catch((e) => console.assertlog(e));
};


export const deleteUser = () => {};