import { reactive } from 'vue';
import { Item } from '../models/Item';

export interface ItemsState {
  loading: boolean;
  items: Item[];
}

const itemsState = reactive<ItemsState>({
  loading: false,
  items: []
});

const actions = {
  loadItems: async () => {
    itemsState.loading = true;
    itemsState.items = [];
    let mockData: Item[] = [
      { id: 1, name: 'Item 1', selected: false },
      { id: 2, name: 'Item 2', selected: false },
      { id: 3, name: 'Item 3', selected: false }
    ];
    setTimeout(() => {
      itemsState.items = mockData;
      itemsState.loading = false;
    }, 1000);
  },

  toggleItemSelected: async (id: number) => {
    const item = itemsState.items.find((item) => item.id === id);
    if (!item) return;
    item.selected = !item?.selected;
  }
};

const getters = {
  get loading() {
    return itemsState.loading;
  },
  get items() {
    return itemsState.items;
  }
};

export interface ItemsStore {
  getters: typeof getters;
  actions: typeof actions;
}

export function useItemsStore(): ItemsStore {
  return {
    getters,
    actions
  };
}
