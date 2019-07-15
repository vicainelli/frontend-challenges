<template>
  <div class="card-repository">
    <h3 class="title">
      <a :href="data.url">{{ data.name }}</a>
    </h3>
    <p class="description">{{ data.description }}</p>

    <div class="details">
      <div>{{ data.language }}</div>
      <div v-if="data.forks_count >= 1">{{ data.forks_count }} forks</div>
      <div>{{ format(new Date(), "MM/DD/YYYY") }}</div>
      <div>
        Updated {{ distanceInWordsStrict(data.updated_at, new Date()) }}
      </div>
    </div>
  </div>
</template>

<script>
import { format, distanceInWordsStrict } from "date-fns";
// import { format, formatDistance, formatRelative, subDays } from "date-fns";
export default {
  components: {},
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      format,
      distanceInWordsStrict
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.card-repository {
  padding: 8px;
  margin: 16px 0 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
}

.title {
  margin: 0;
  letter-spacing: 0.025rem;
}

.description {
  font-size: 14px;
  letter-spacing: 0.025rem;
  color: rgb(50, 50, 50);
}

.details {
  display: flex;
  > div {
    margin-right: 8px;
    font-size: 12px;
    color: rgb(50, 50, 50);
  }
}
</style>
