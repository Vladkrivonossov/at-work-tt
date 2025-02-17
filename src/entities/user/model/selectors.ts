import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';

const isUserArchivedSelector = createSelector(
  [
    (state: RootState) => state.users.archived,
    (_: RootState, userId: number) => userId
  ],
  (archivedUsers, userId) => archivedUsers.some(user => user.id === userId)
);

const getUserByIdSelector = createSelector(
  [
    (state: RootState) => state.users.active,
    (_: RootState, userId: number) => userId
  ],
  (activeUsers, userId) => {
    const user = activeUsers.find(user => user.id === userId);

    return user;
  }
);

export const selectUserById = (userId: number) =>
  (state: RootState) => getUserByIdSelector(state, userId);

export const selectIsUserArchived = (userId: number) =>
  (state: RootState): boolean => isUserArchivedSelector(state, userId);