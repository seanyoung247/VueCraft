
<script setup lang="ts">
  import { Level } from './types'
  import testLevel from './testlevel'
  import Block from './components/Block.vue'

  const level = new Level(testLevel)
  console.log(level)
</script>

<template>
  <div class="view3d">
    <Block :size="250"/>
  </div>
</template>

<style scoped>
  .view3d {
    transform-style: preserve-3d;
    perspective: 1000px;
  }
</style>
