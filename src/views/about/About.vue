<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { AboutState, AboutProps } from './About.state.ts';

const state = new AboutState();
export default defineComponent({
  inheritAttrs: false,
  props: {
    meta: {
      type: Object as PropType<AboutProps>,
      default: new AboutProps()
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
  <h1>About</h1>
</template>

<style scoped>
@import './About.scss';
</style>
