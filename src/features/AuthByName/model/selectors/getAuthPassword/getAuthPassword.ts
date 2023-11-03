import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'

export const getAuthPassword = (state: StoreSchema) =>
  state.authForm?.password || ''
