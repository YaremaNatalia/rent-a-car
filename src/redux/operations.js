import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://64d8f7b15f9bf5b879cec100.mockapi.io/api/adverts';

export const fetchAdvertsThunk = createAsyncThunk(
  'adverts/fetchAll',
  async (count, thunkAPI) => {
    try {
      const response = await axios.get(
        `/?page=${count.page}&limit=${count.limit}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
