import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export const getCounterState = (state: RootState) => {
    return state.counter
}

export const getCounterAmount = createSelector([getCounterState], (counterAmount) => {
    return counterAmount.value
})