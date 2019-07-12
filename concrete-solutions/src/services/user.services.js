import Axios from "axios";

const RESOURCE_NAME = `users/`;

export default {
  get(username) {
    return Axios.get(`${RESOURCE_NAME}${username}`);
  },
  getRepos(username) {
    return Axios.get(`${RESOURCE_NAME}${username}/repos`);
  }
};
