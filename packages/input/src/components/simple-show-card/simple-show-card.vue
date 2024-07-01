<script lang="ts" setup>
// import { ref, computed, watch } from "vue";

defineOptions({
  name: "SimpleShowCard",
});

const props = withDefaults(
  defineProps<{
    showText?: string;
  }>(),
  {
    showText: "默认展示文本",
  }
);
</script>

<template>
  <section class="simple-show-card-root">
    {{ props.showText }}
  </section>
</template>

<style lang="scss" scoped>
.simple-show-card-root {
  background-color: purple;
  padding: 2rem;
}
</style>
