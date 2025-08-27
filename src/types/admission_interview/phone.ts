export type InterviewPhoneNumber = {
  id: number
  number: string
  is_active: boolean
}

export type InterviewPhoneNumberDto = Omit<InterviewPhoneNumber, 'id'>
