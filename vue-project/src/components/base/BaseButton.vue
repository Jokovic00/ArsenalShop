<template>
  <button class="base-btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped>
.base-btn {
  background: #db0007;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}
.base-btn:hover {
  background: #a00005;
}
</style>
