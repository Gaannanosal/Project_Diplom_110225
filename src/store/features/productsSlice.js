import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  likedProducts: [],
  loading: false,
  error: null, 
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/products/all`);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      throw new Error('API вернул не JSON: ' + text.slice(0, 80));
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getLikedProducts(state, action) {
      const productId = action.payload;
      if (state.likedProducts.includes(productId)) {
        state.likedProducts = state.likedProducts.filter(id => id !== productId);
      } else {
        state.likedProducts.push(productId);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Request failed';
      });
  },
});

export const { getLikedProducts } = productsSlice.actions;
export default productsSlice.reducer;