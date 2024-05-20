<script lang="ts" setup>
import { ref, computed, watch } from "vue";

const modelValue = defineModel({ type: String });
</script>

<template>
  <section class="simple-show-input-root">
    <input class="openx-input" type="text" v-model="modelValue" />
  </section>
</template>

<style lang="scss" scoped>
.simple-show-input-root {
}
</style>
