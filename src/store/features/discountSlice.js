import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendDiscountRequest = createAsyncThunk(
  "discount/send",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/sale/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        let errorMessage = "Wrong input. Try again.";
        try {
          const errorData = await response.json();

          if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch (jsonError) {
          errorMessage = "An unexpected error occurred. Please try again.";
        }
        return rejectWithValue(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Network or fetch error:", error);
      return rejectWithValue(
        "Request failed. Please check your internet connection and try again."
      );
    }
  }
);

const discountSlice = createSlice({
  name: "discount",
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendDiscountRequest.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.message = null;
      })
      .addCase(sendDiscountRequest.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.message = "The discount has been successfully sent by email.";
        state.error = null;
      })
      .addCase(sendDiscountRequest.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        state.message = null;
      });
  },
});

export const { resetDiscountState } = discountSlice.actions;

export default discountSlice.reducer;
