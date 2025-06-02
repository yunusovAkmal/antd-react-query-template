export type User = {
  id: number
}

export type AuthResponse = {
  token: string
} & User

export type AuthParams = {
  code: string | null
  state: string | null
}

export type SignInResponse = User & {
  token: string
}

export type PassportResponse = {
  pinfl: string
  gender: string
  photo: string
  citizenship: string
  nationality: string
  birthDate: string
  lastName: string
  serialAndNumber: string
  fatherName: string
  passportExpireDate: string
  firstName: string
  givenDate: string
  country: string
  region: string
  district: string
  address: string
}
