export type TechnicalPhoneNumber = {
  id: number
  number: string
  is_active: boolean
}

export type TechnicalPhoneNumberDto = Omit<TechnicalPhoneNumber, 'id'>
