<template>
  <button :type="buttonType" class="button" :class="[...buttonClass]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    // * Button Type
    buttonType: {
      type: String,
      default: "button"
    },
    buttonClass: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background-color: rgb(220, 220, 220);
  border: 1px solid rgb(30, 30, 30);
  appearance: none;
}

// * Sizes
.base {
  padding: 8px 16px;
  font-size: 0.875em;
  height: 40px;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
}

// * Colors
.primary {
  background-color: #127fbf;
  border-color: #127fbf;
  color: #fff;
}

// Utils
.inline {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
