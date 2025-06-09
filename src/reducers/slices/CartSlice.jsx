import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItems: 5
};

export const cartSlice = createSlice(
    {
        name: "cart",
        initialState: initialState,
        reducers: {
            setTotalItems: (state,action) => {
                state.totalItems = action.payload;
                localStorage.setItem("totalItems",JSON.stringify(state.totalItems));
            },
            addItem: (state) => {
                state.totalItems += 1;
                localStorage.setItem("totalItems",JSON.stringify(state.totalItems));
            },
            removeItem: (state) => {
                if(state.totalItems > 0) {
                    state.totalItems -= 1;
                    localStorage.setItem("totalItems",JSON.stringify(state.totalItems));
                }
            },
            resetCart: (state) => {
                if(state.totalItems > 0) {
                    state.totalItems = 0;
                }
            }
        }
    }
);

export const {setTotalItems,addItem,removeItem,resetCart} = cartSlice.actions;
export default cartSlice.reducer;