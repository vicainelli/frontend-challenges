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

<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

a {
  color: #1992d4;
}
</style>
