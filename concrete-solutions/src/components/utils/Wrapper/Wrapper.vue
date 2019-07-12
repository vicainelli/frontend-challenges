<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "wrapper"
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
}
</style>
