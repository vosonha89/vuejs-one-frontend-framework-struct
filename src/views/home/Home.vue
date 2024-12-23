<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { HomeState, HomeProps } from './Home.state.ts';

const state = new HomeState();
export default defineComponent({
  inheritAttrs: false,
  props: {
    meta: {
      type: Object as PropType<HomeProps>,
      default: HomeProps
    }
  },
  data() {
    return state.model;
  },
  async mounted() {
    await state.init();
  },
  methods: {
  }
})
</script>

<template>
  <h1>{{ meta?.pageName }}</h1>
</template>

<style scoped>
@import './Home.scss';
</style>
