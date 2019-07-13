<template>
  <wrapper>
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
    <div>
      <user-card
        :user-name="searchResult.name"
        :user-email="searchResult.email"
        :user-bio="searchResult.bio"
        :user-login="searchResult.login"
        :user-avatar="searchResult.avatar_url"
        :user-followers="searchResult.followers"
        :user-following="searchResult.following"
      ></user-card>
    </div>
  </wrapper>
</template>

<script>
import UserService from "@/services/user.services";

import Wrapper from "@/components/utils/Wrapper";

import UserCard from "@/components/molecules/UserCard";

export default {
  components: {
    "user-card": UserCard,
    wrapper: Wrapper
  },
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

      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped></style>
