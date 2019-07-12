<template>
  <div>
    <form action="">
      <label for="search">Buscar usuário</label>
      <input
        type="search"
        v-on:keyup="searchUser"
        name="search"
        id="search"
        v-model="search"
      />
    </form>
    <p>name: {{ searchResult.name }}</p>
    <p>email: {{ searchResult.email }}</p>
    <p>bio: {{ searchResult.bio }}</p>
    <p>followers: {{ searchResult.followers }}</p>
    <p>following: {{ searchResult.following }}</p>
    <img :src="searchResult.avatar_url" />
    <router-link :to="`/users/${searchResult.login}`">Perfil</router-link>
  </div>
</template>

<script>
import UserService from "@/services/user.services";

export default {
  data() {
    return {
      search: "",
      showSearch: false,
      timeOut: null,
      searchResult: {}
    };
  },
  methods: {
    searchUser() {
      const _this = this;

      clearTimeout(_this.timeOut);
      _this.timeOut = setTimeout(function() {
        if (_this.search === null || _this.search === "") {
          _this.searchResult = {};
          return;
        }

        UserService.get(_this.search)
          .then(res => {
            _this.searchResult = res.data;
            _this.loading = false;
          })
          .catch(e => console.error(e));

        // fetch(`/search?q=${_this.search}`)
        //   .then(res => res.json())
        //   .then(res => {
        //     _this.searchResult = res;
        //   });
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped></style>
