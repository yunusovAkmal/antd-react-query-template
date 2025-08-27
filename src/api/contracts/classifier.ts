import { useGet, type QueryGetOption } from '~/api/contracts/crud'
import { STALE_TIME } from '~/api/http'
import {
  ClassifierEnum,
  type CefrTypeClassifier,
  type DistrictClassifier,
  type RegionClassifier
} from '~/types'

const useGetClassifier = <T>(classifier: ClassifierEnum, options: QueryGetOption<T> = {}) =>
  useGet<T>('/classifier/cached/', { classifier }, { staleTime: STALE_TIME.TWO_HOURS, ...options })

export const useGetRegions = () => useGetClassifier<RegionClassifier[]>(ClassifierEnum.REGION)

export const useGetCefrTypes = () =>
  useGetClassifier<CefrTypeClassifier[]>(ClassifierEnum.CEFR_TYPE)

export const useGetDistricts = () => useGetClassifier<DistrictClassifier[]>(ClassifierEnum.DISTRICT)
