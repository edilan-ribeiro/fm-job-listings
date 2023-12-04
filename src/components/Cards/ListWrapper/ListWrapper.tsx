import styles from './ListWrapper.module.scss'
import { WrapperList } from '../../../types/interfaces'

export const ListWrapper = ({ children }: WrapperList) => {
	return <ul className={styles.listWrapper}>{children}</ul>
}
