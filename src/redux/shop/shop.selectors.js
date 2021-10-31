import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  dslr: 1,
  mirrorless: 2,
  bridge: 3,
  compact: 4,
  instant: 5,
  action: 6,
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
);
