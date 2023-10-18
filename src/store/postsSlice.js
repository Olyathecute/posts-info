import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllPosts } from '../request'

export const getPosts = createAsyncThunk('getPosts', async (_, { rejectWithValue, dispatch }) => {
  const result = await getAllPosts()
  dispatch(setPosts(result))
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], lastIndex: 0 },
  reducers: {
    setPosts: (_, action) => ({ posts: action.payload, lastIndex: action.payload.length }),
    toAddPost: (state, action) => {
      state.posts.push({
        userId: 1000,
        id: state.lastIndex + 1,
        title: action.payload.title,
        body: action.payload.body,
      })
      state.lastIndex++
    },
    deletePost: (state, action) => {
      const filteredPosts = state.posts.filter(({ id }) => !action.payload.includes(id))
      return { ...state, posts: filteredPosts }
    },
  },
})

export const { setPosts, toAddPost, deletePost } = postsSlice.actions
export default postsSlice.reducer
