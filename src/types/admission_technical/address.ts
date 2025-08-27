export type TechnicalAddress = {
  id: number
  is_active: boolean
  name: string
  block: string
  floor: string
  room: string
  location: string
}

export type TechnicalAddressDto = Omit<TechnicalAddress, 'id'>
