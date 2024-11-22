import type { StateCreator } from 'zustand'
import { create as _actualCreate } from 'zustand'

const storeResetFns = new Set<() => void>()

export const resetAllStoreStates = () => {
    for (const resetStoreState of storeResetFns) {
        resetStoreState();
    }
};

export const create = (<T>() => {
    return (stateCreator: StateCreator<T>) => {
        const store = _actualCreate(stateCreator)
        const initialState = store.getInitialState()
        storeResetFns.add(() => {
            store.setState(initialState, true)
        })
        return store
    }
}) as typeof _actualCreate;

