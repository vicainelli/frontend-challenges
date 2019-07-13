<template>
  <input
    :type="inputType"
    :name="inputName"
    :class="[...inputClass]"
    :id="inputId"
    v-bind:value="value"
    :placeholder="inputPlaceholder"
    v-on:input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    // * Input Type
    inputType: {
      type: String,
      default: "text"
    },

    // * Input Placeholder
    inputPlaceholder: {
      type: String,
      default: "text"
    },

    // * Input Class
    inputClass: {
      type: Array,
      default: null
    },

    // * Input Name
    inputName: {
      type: String,
      default: ""
    },

    // * Input Id
    inputId: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  margin-top: 4px;
  margin-bottom: 4px;
  box-sizing: border-box;
  border: 1px solid rgb(190, 190, 190);
  appearance: none;
  height: 40px;
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 0.875em;
  color: rgb(60, 60, 60);
  border-radius: 4px;

  &.inline {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    margin: 0;
  }
}
</style>
