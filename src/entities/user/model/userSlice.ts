import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../shared/types/user';
import { fetchUsers } from '../../../shared/api/userApi';

interface UserState {
  active: IUser[];
  archived: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  active: [],
  archived: [],
  loading: false,
  error: null
};

export const fetchUsersThunk = createAsyncThunk('users/fetchUsers', async () => {
  const users = await fetchUsers();
  return users;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    archiveUser(state, action: PayloadAction<number>) {
      const user = state.active.find((user) => user.id === action.payload);

      if (user) {
        state.archived.push(user);
        state.active = state.active.filter((user) => user.id !== action.payload);
      }
    },
    activateUser(state, action: PayloadAction<number>) {
      const user = state.archived.find((user) => user.id === action.payload);

      if (user) {
        state.active.push(user);
        state.archived = state.archived.filter((user) => user.id !== action.payload);
      }
    },
    hideUser(state, action: PayloadAction<number>) {
      const user = state.active.find((user) => user.id === action.payload);

      if (user) {
        state.active = state.active.filter((user) => user.id !== action.payload);
      }
    },
    updateUser(state, action: PayloadAction<{ id: number, updates: Partial<IUser> }>) {
      const { id, updates } = action.payload;

      const user = state.active.find((user) => user.id === id);

      if (user) {
        Object.assign(user, updates);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.active = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'data fetching error';
      });
  }
});

export const { archiveUser, activateUser, hideUser, updateUser } = userSlice.actions;
export default userSlice.reducer;