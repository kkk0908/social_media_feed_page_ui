import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../interfaces/IUser";

const initialUserState: IUserState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk<IUser, void>(
  "user/fetchUser",
  async () => {
    const response = await fetch("https://api.example.com/user");
    const data = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const {
  setLoading: setUserLoading,
  setError: setUserError,
  setUser,
} = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
