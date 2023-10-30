<template>
  <h3>Items</h3>
  <loader v-show="loading"></loader>
  <ul v-show="!loading">
    <item
      v-for="item in items"
      :key="item.id"
      :model="item"
      @selectItem="onSelectItem"
    >
    </item>
  </ul>
</template>

<script setup lang="ts">
import Loader from "../../components/Loader.vue";
import type { Item as IItem } from "../models/Item";
import Item from "./ItemsList/Item.vue";

defineProps<{ items: IItem[]; loading: boolean }>();

const emit = defineEmits<{
  (e: "selectItem", id: number): any;
}>();

const onSelectItem = (id: number) => {
  emit("selectItem", id);
};
</script>

<style>
ul {
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
