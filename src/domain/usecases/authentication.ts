// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AccountModel } from '../models/account-model'

export interface AuthenticationParams {
  email: string
  password: string
}

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}
