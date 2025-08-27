import { useGet } from '~/api/contracts/crud'
import { type BaseClassifier } from '~/types'

export const useGetClassifier =() =>  useGet<BaseClassifier>('/classifier/cached/',)
