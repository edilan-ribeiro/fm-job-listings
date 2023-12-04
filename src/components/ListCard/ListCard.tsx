import styles from './ListCardStyles.module.scss'
import { CardItems } from '../../interfaces/interfaces'

export const ListCard = ({children} : CardItems) => {
    return (
        <li className={styles.listCards}>
           {children}
        </li>
    )
}