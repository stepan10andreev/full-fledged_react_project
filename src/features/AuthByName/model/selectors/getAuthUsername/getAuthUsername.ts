import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'

export const getAuthUsername = (state: StoreSchema) =>
  state.authForm?.username || ''
