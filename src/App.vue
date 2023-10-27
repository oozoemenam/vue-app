<template>
  <div class="home">
    <items-list :items="items" @select-item="onSelectItem"></items-list>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ItemsList from './items/components/ItemsList.vue';
import { Item } from './items/models/Item';

const items: Item[] = reactive([
  { id: 1, name: 'Item 1', selected: false },
  { id: 2, name: 'Item 2', selected: false },
  { id: 3, name: 'Item 3', selected: false }
]);

const onSelectItem = (id: number) => {
  const item = items.find((item) => item.id === id);
  if (!item) {
    return console.log(`onSelectItem: could not find item with id: ${id}`);
  }
  item.selected = !item.selected;
  console.log('onSelectItem', item.id, item.selected);
};
</script>

<style></style>
