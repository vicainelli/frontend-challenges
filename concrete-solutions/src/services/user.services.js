import Axios from "axios";

const RESOURCE_NAME = `users/`;

const get = username => Axios.get(`${RESOURCE_NAME}${username}`);
const getRepos = username => Axios.get(`${RESOURCE_NAME}${username}/repos`);

export default {
  get,
  getRepos
};
