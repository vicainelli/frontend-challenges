<template>
  <wrapper>
    <loading v-if="loading.user"></loading>
    <div v-if="!loading.user">
      <div class="flex items-center">
        <div class="user-avatar">
          <img :src="user.avatar_url" alt="" />
        </div>
        <div class="card-names-container">
          <h1 class="card-names">
            <span class="name">{{ user.name }}</span>
            <span class="nickname">{{ user.login }}</span>
          </h1>
        </div>
      </div>

      <hr />

      <p v-if="user.bio">{{ user.bio }}</p>

      <ul class="card-details">
        <li v-if="user.company">{{ user.company }}</li>
        <li v-if="user.location">{{ user.location }}</li>
        <li v-if="user.public_email">{{ user.public_email }}</li>
        <li v-if="user.blog">
          <a :href="user.blog">{{ user.blog }}</a>
        </li>
      </ul>

      <router-link :to="`/users/${user.login}/repositories`"
        >Repositories</router-link
      >
    </div>
  </wrapper>
</template>

<script>
import UserService from "@/services/user.services";
import Wrapper from "@/components/utils/Wrapper";
import Loading from "@/components/atoms/Loading";

export default {
  components: {
    loading: Loading,
    wrapper: Wrapper
  },
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
        user: false
      },
      user: {}
    };
  },
  mounted() {
    this.getUser(this.username);
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
        .catch(e => {
          throw e;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.user-avatar {
  margin-right: 16px;
  img {
    width: 120px;
  }
}

.card-names {
  letter-spacing: 0.025rem;
  span {
    display: block;
  }
  .name {
    font-size: 24px;
    font-weight: 500;
    color: rgb(40, 40, 40);
  }
  .nickname {
    font-size: 18px;
    font-weight: 300;
    color: rgb(120, 120, 120);
  }
}

.card-details {
  list-style: none;
  margin: 16px 0;
  padding: 0;
  color: rgb(40, 40, 40);

  li {
    font-size: 14px;
    margin: 4px 0;
  }
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}
</style>
