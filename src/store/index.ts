import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { reducers } from '@/store/reducers';

// A utility function to create a slice for an API call
export function createApiSlice(name: string, apiThunk: any) {
    type InitalStateType = {
        name: any;
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
        error: string | null;
    };
    const initialState: InitalStateType = {
      name: null,
      status: 'idle',
      error: null,
    };
  
    return createSlice({
      name,
      initialState,
      reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(apiThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(apiThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.name = action.payload;
            })
            .addCase(apiThunk.rejected, (state, action: PayloadAction<string | null>) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
    });
}

// Create the store
const store = configureStore({
  reducer: reducers
});



// Define hooks for using the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// usage types and examples
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;