import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer'
import { middleware } from './middleware'

export const store = configureStore({
  reducer : reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
        serializableCheck: false
      }).concat(middleware)
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;

