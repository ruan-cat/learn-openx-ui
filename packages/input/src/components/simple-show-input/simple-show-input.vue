<script lang="ts" setup>
import SimpleShowCard from "../simple-show-card/simple-show-card.vue";

defineOptions({
  name: "SimpleShowInput",
});

const modelValue = defineModel({ type: String });
</script>

<template>
  <section class="simple-show-input-root">
    <input class="openx-input" type="text" v-model="modelValue" />

    <SimpleShowCard :showText="modelValue" />
  </section>
</template>

<style lang="scss" scoped>
.simple-show-input-root {
}
</style>
