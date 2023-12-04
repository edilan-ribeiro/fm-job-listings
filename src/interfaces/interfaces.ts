
import { ReactNode } from 'react'

export interface Jobs {
    id: number
    company: string
    logo: string
    new: boolean
    featured: boolean
    position: string
    role: string
    level: string
    postedAt: string
    contract: string
    location: string
    languages: string[]
    tools: string[]
}


export interface ListFilters {
	selectedItem: string[]
	clearFilter: React.MouseEventHandler
	removeItem: (selectedItem:string) => void
}

export interface CardItems {
    children: ReactNode
    key: number
}

export interface StackInfos {
	stack: string[]
	click: (stackInfo: string) => void
}

export interface JobInfos {
	img: string
	company: string
	recent: boolean
	featured: boolean
	position: string
	children: ReactNode
}


export interface JobTimeInfos {
	days: string
	contractType: string
	place: string
}
