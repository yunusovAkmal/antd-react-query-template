import type { SVGProps } from 'react'

export type Option<T = string | number | null> = {
  label: string
  value: T
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}
