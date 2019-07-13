<template>
  <wrapper>
    <form class="form-search-user" action v-on:submit.prevent="searchUser">
      <div class="inline-form">
        <generic-input
          input-type="search"
          input-name="search"
          input-id="search"
          input-placeholder="GitHub username"
          :input-class="['inline']"
          v-model="search"
        ></generic-input>
        <generic-button
          :button-class="['primary', 'base', 'inline']"
          button-type="submit"
          >Buscar</generic-button
        >
      </div>
    </form>
    <loading v-if="loading"></loading>
    <div v-if="searchResult != null && !loading">
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

import GenericButton from "@/components/atoms/GenericButton";
import Loading from "@/components/atoms/Loading";
import GenericInput from "@/components/atoms/GenericInput";

import UserCard from "@/components/molecules/UserCard";

export default {
  components: {
    loading: Loading,
    "generic-button": GenericButton,
    "generic-input": GenericInput,
    "user-card": UserCard,
    wrapper: Wrapper
  },
  data() {
    return {
      search: "",
      loading: false,
      showSearch: false,
      searchResult: null
    };
  },
  methods: {
    searchUser() {
      const _this = this;
      _this.loading = true;

      UserService.get(_this.search)
        .then(res => {
          _this.searchResult = res.data;
          _this.loading = false;
        })
        .catch(e => {
          _this.searchResult = null;
          console.error(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-search-user {
  margin-bottom: 24px;
}
.inline-form {
  display: flex;
}
</style>
