import { GENDER_TEXT } from '~/data'
import { GenderEnum } from '~/types'

export function GenderText({ gender }: { gender: GenderEnum }) {
  return <span>{GENDER_TEXT[gender]}</span>
}
