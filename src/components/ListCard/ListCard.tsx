import styles from './ListCardStyles.module.scss'
import { ReactNode } from 'react'

interface cardItems {
    children: ReactNode
    key: number
}

export const ListCard = ({children} : cardItems) => {
    return (
        <li className={styles.listCards}>
           {children}
        </li>
    )
}