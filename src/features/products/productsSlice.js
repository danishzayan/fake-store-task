import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

const initialState = {
  items: [],
  selectedProduct: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await api.fetchProducts();
  return response.data;
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
  const response = await api.fetchProductById(id);
  return response.data;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, updatedProduct }) => {
  const response = await api.updateProduct(id, updatedProduct);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await api.deleteProduct(id);
  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // The API returns the updated product, but it's good practice to merge
        // it with the existing data in case the response is partial.
        const updatedProduct = { ...state.selectedProduct, ...action.payload };

        const index = state.items.findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (index !== -1) {
          state.items[index] = updatedProduct;
        }
        state.selectedProduct = updatedProduct;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter((product) => product.id !== action.payload);
        state.selectedProduct = null;
      })
      .addMatcher(
        (action) => [updateProduct.pending, deleteProduct.pending].includes(action.type),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        (action) => [updateProduct.rejected, deleteProduct.rejected].includes(action.type),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        }
      );
  },
});

export const { clearSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
