<script lang="ts" setup>
import { ref, computed, watch } from "vue";

// FIXME: 这里没有充足的类型声明提示
import SimpleShowCard from "@input/components/simple-show-card/simple-show-card.vue";

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
