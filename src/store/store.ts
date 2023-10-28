import { useItemsStore } from '../items/store';

export function useAppStore() {
  return {
    itemsStore: useItemsStore()
  };
}

export type RootStore = ReturnType<typeof useAppStore>;
