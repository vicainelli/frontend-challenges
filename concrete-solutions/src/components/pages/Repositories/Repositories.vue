<template>
  <wrapper>
    <h1>Repositories</h1>
    <loading v-if="loading.repos" />
    <div v-if="!loading.repos">
      <card-repository
        v-for="repo in data.repos"
        :key="repo.id"
        :data="repo"
      ></card-repository>
    </div>
  </wrapper>
</template>

<script>
import Wrapper from "@/components/utils/Wrapper";
import Loading from "@/components/atoms/Loading";
import CardRepository from "@/components/molecules/CardRepository";
import UserService from "@/services/user.services";

export default {
  components: {
    loading: Loading,
    wrapper: Wrapper,
    "card-repository": CardRepository
  },
  props: {
    username: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      loading: {
        repos: false
      },
      data: {
        repos: []
      }
    };
  },
  computed: {},
  mounted() {
    this.getRepos(this.username);
  },
  methods: {
    getRepos(username) {
      const _this = this;
      _this.loading.repos = true;
      UserService.getRepos(username)
        .then(res => {
          _this.data.repos = res.data;
          _this.loading.repos = false;
        })
        .catch(e => console.error(e));
    }
  }
};
</script>

<style lang="scss" scoped></style>
