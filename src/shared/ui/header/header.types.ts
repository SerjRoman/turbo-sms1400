import { ReactNode } from "react"

export interface IHeaderProps{
    title?: string
    headerLeft?: ReactNode
    headerRight?: ReactNode
    headerBottom?: ReactNode
}