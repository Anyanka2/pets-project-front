export const userInfo = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectVerifyToken = (state) => state.auth;

export const selectAllMyPets = (state) => state.auth.user.petsData;