import create, { GetState, SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { TAuthSlice, createAuthSlice } from './slices'

export type TGlobalStore = TAuthSlice

const store = (set: SetState<TGlobalStore>, get: GetState<TGlobalStore>): TGlobalStore => ({
  ...createAuthSlice(set, get),
})

const useStore = create<TGlobalStore>(devtools(store))

export default useStore
