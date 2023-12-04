import styles from './ListCardStyles.module.scss'
import { CardItems } from '../../../types/interfaces'

export const ListCard = ({children, isrecent} : CardItems) => {
    return (
        <li className={styles.listCards} data-isrecent={isrecent}>
           {children}
        </li>
    )
}