import { UserSchema } from 'entities/user'
import { AuthSchema } from 'features/AuthByName'

export interface StoreSchema {
  user: UserSchema
  authForm: AuthSchema
}
