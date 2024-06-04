import { immer } from "zustand/middleware/immer";
import { createWithEqualityFn } from "zustand/traditional";
import { GetState, GlobalStateTypes, SetState } from "./GlobalStateTypes";
import { DataModule } from "./modules/DataModule/DataModule";

const storeModules = (
  set: SetState<GlobalStateTypes>,
  get: GetState<GlobalStateTypes>,
) => ({
  ...DataModule({ set, get }),
});

const immerWrapper = immer<GlobalStateTypes>(
  (set: SetState<GlobalStateTypes>, get: GetState<GlobalStateTypes>) =>
    storeModules(set, get),
);

const useGlobalState = createWithEqualityFn(immerWrapper);

export { useGlobalState };
