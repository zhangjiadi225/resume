<script setup>
import { reactive } from 'vue';
const arr = reactive(['你不一定要很厲害，才能開始','你要開始，才能很厲害'])
</script>

<template>
  <div>
    <div class="title">兴趣使然的前端开发</div>
    <Describe v-for="item in arr">
      {{item}}
    </Describe>
  </div>
</template>

<style lang="scss" scoped>
.title{
  position: relative;
  font-size: 28px;
  font-weight: 700;
  left: 340px;
  background: linear-gradient(to right top, #69aeea, #7998e0, #8f7fce, #a364b1, #af468c);
	  -webkit-background-clip: text;
	  color: transparent;
}
</style>
