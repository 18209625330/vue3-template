<template>
  <div class="toast-wrap">
    {{ props.message }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['message']);
console.log(props.message); // 确保 message 正确地被传入
</script>

<style>
.toast-wrap {
  background-color: #000;
  padding: 8px 15px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  position: fixed;
  z-index: 99;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
</style>

