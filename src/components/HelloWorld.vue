<script lang="ts">
import { defineComponent, } from 'vue';
import type { PropType } from 'vue';
import { HelloWorldState, HelloWorldProps } from './HelloWorld.state.ts';

const state = new HelloWorldState();
export default defineComponent({
  inheritAttrs: false,
  props: {
    meta: Object as PropType<HelloWorldProps>
  },
  data() {
    return state.model;
  },
  methods: {
  },
  async mounted() {
    await state.init();
  }
})
</script>

<template>
  <h1>{{ meta?.msg }}</h1>
  <h1>{{ meta?.name }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <span>{{ comment }}</span>
    <input v-model="comment"></input>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
@import './HelloWorld.scss';
</style>
