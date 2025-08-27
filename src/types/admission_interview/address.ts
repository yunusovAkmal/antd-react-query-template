export type InterviewAddress = {
  id: number
  is_active: boolean
  name: string
  block: string
  floor: string
  room: string
  location: string
}

export type InterviewAddressDto = Omit<InterviewAddress, 'id'>
