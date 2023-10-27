<template>
  <h3>Items:</h3>
  <ul>
    <li v-for="item in items" :key="item.id" @click="handleClick(item)">
      {{ item.name }} [{{ item.selected }}]
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Item } from '../models/Item';

defineProps<{ items: Item[] }>();

const emit = defineEmits<{
  (e: 'selectItem', id: number): any;
}>();

const handleClick = (item: Item) => {
  emit('selectItem', item.id);
};
</script>

<style></style>
