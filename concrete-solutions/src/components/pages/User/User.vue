<template>
  <div>
    <div v-if="loading.user">Carregando dados...</div>
    <div v-if="!loading.user">
      User: {{ username }}

      {{ user }}
    </div>
    <hr />
    <div v-if="loading.repos">Carregando dados...</div>
    <ul v-if="!loading.repos">
      <li v-for="repo in repos" :key="repo.id">
        {{ repo.html_url }}
      </li>
    </ul>
  </div>
</template>

<script>
import UserService from "@/services/user.services";

export default {
  props: {
    // * Username
    username: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      loading: {
        user: false,
        repos: false
      },
      user: {},
      repos: []
    };
  },
  mounted() {
    this.getUser(this.username);
    this.getRepos(this.username);
  },
  methods: {
    getUser(username) {
      const _this = this;
      _this.loading.user = true;
      UserService.get(username)
        .then(res => {
          _this.user = res.data;
          _this.loading.user = false;
        })
        .catch(e => console.error(e));
    },

    getRepos(username) {
      const _this = this;
      _this.loading.repos = true;
      UserService.getRepos(username)
        .then(res => {
          _this.repos = res.data;
          _this.loading.repos = false;
        })
        .catch(e => console.error(e));
    }
  }
};
</script>

<style lang="scss" scoped></style>
