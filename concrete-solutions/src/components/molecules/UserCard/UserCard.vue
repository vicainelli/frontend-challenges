<template>
  <div class="user-card">
    <div v-if="userAvatar != null" class="user-avatar">
      <img :src="userAvatar" :alt="`Avatar ${userName}`" />
    </div>
    <div class="user-info">
      <h2>
        <router-link :to="`/users/${userLogin}`">{{ userLogin }}</router-link>
        {{ userName }}
      </h2>
      <p v-if="userEmail != null">{{ userEmail }}</p>
      <p v-if="userBio != null">{{ userBio }}</p>
      <div class="user-social-data">
        <div>{{ userFollowers }} followers</div>
        <div>{{ userFollowing }} following</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // * LOGIN
    userLogin: {
      type: String,
      default: null
    },
    // * AVATAR
    userAvatar: {
      type: String,
      default: null
    },

    // * NAME
    userName: {
      type: String,
      default: null
    },

    // * EMAIL
    userEmail: {
      type: String,
      default: null
    },

    // * BIO
    userBio: {
      type: String,
      default: null
    },

    // * FOLLOWERS
    userFollowers: {
      type: Number,
      default: 0
    },

    // * FOLLOWING
    userFollowing: {
      type: Number,
      default: 0
    },

    // * URL
    userUrl: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.user-card {
  padding: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  font-family: sans-serif;
  display: flex;
  align-items: flex-start;
}
.user-avatar {
  margin-right: 16px;
  img {
    width: 48px;
    height: auto;
  }
}
.user-info {
  h2 {
    font-size: 16px;
    margin: 0 0 8px;
    color: rgb(40, 40, 40);
  }
  p {
    margin: 0;
    font-size: 12px;
    small {
      display: block;
    }
  }
}

.user-social-data {
  display: flex;
  margin-top: 8px;
  > div {
    margin-right: 8px;
    font-size: 14px;
  }
}
</style>
