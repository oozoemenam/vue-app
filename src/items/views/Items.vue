<template>
  <items-list
    :items="items"
    :loading="loading"
    @selectItem="onSelectItem"
  ></items-list>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import ItemsList from "../components/ItemsList.vue";
import { useAppStore } from "../../store";
import { Item } from "../models/Item";

export default defineComponent({
  name: "Home",
  components: {
    ItemsList,
  },
  setup() {
    const { itemsStore } = useAppStore();
    const { actions: itemsStoreActions } = itemsStore;
    const items = computed((): Item[] => {
      return itemsStore.getters.items;
    });
    const loading = computed((): boolean => {
      return itemsStore.getters.loading;
    });

    const onSelectItem = async (id: number) => {
      await itemsStoreActions.toggleItemSelected(id);
    };

    onMounted(async () => {
      await itemsStoreActions.loadItems();
    });

    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>
