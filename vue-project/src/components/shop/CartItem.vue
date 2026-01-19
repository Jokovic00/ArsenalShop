<template>
  <div class="item">
    <p>{{ item.name }} ({{ item.quantity }}x)</p>
    <p>{{ item.price * item.quantity }} €</p>
    <BaseButton @click="$emit('remove', item.id)">Remove</BaseButton>
  </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'

export default {
  components: { BaseButton },
  props: {
    item: Object
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}
</style>
