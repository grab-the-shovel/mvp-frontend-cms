import { ReactNode } from "react"

export interface ButtonProp {
  size: string
  onClick: Function
  children: ReactNode
  color: string
  disabled: boolean
}
