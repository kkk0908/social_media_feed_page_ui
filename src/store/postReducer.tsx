import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, IPostState } from "../interfaces/IPost";

export const fetchPosts = createAsyncThunk<IPost[], void>(
  "post/fetchPosts",
  async () => {
    const response = await fetch("https://api.example.com/posts");
    const data = await response.json();
    return data;
  }
);

const initialPostState: IPostState = {
  posts: [],
  loading: false,
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | "">) => {
      state.error = action.payload;
    },
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "";
    });
  },
});

export const { setLoading, setError, setPosts } = postSlice.actions;

const postReducer = postSlice.reducer;

export default postReducer;
