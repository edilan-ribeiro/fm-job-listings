import styles from './ListFilterStyles.module.scss'
import iconRemove from '/images/icon-remove.svg'
import { ListFilters } from '../../types/interfaces'
import { motion } from 'framer-motion'

export const ListFilter = ({ selectedItem, clearFilter, removeItem }: ListFilters) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.4 }}
			className={styles.listFilter}
		>
			<ul className={styles.selectedItem}>
				{selectedItem.map((selectedItem, index) => (
					<li key={index}>
						<p>{selectedItem}</p>
						<button
							onClick={() => removeItem(selectedItem)}
							className={styles.removeFilterBtn}
							title={`Removes ${selectedItem} from filter`}
						>
							<img src={iconRemove} alt="icon from remove filter button" />
						</button>
					</li>
				))}
			</ul>
			<button onClick={clearFilter} className={styles.clearBtn}>
				Clear
			</button>
		</motion.div>
	)
}
