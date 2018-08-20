import { types } from "mobx-state-tree"

export const RootStoreModel = types.model("RootStore").props({
  // someStore: types.optional(SomeStoreModel, {}),
})

export type RootStore = typeof RootStoreModel.Type
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType
