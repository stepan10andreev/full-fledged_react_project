import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'

export const getAuthError = (state: StoreSchema) =>
  state.authForm?.error || false
