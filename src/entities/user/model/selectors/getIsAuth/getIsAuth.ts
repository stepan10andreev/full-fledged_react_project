import { StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema'

export const getIsAuth = (state: StoreSchema) => state.user.isAuth
