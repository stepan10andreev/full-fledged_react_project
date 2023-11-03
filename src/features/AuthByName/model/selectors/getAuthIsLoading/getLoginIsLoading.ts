import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'

export const getAuthIsLoading = (state: StoreSchema) =>
  state.authForm?.isLoading || false
