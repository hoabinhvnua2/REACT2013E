import { createSelector } from 'reselect'


const getUser = state => state.user

export const userSclector = createSelector(
    getUser,
    user => user
)