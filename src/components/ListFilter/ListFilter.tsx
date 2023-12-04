import styles from './ListFilterStyles.module.scss'
import iconRemove from '/images/icon-remove.svg'
import { ListFilters } from '../../interfaces/interfaces'


export const ListFilter = ({ selectedItem, clearFilter, removeItem }: ListFilters) => {
	return (
		<div className={styles.listFilter}>
			<ul className={styles.selectedItem}>
				{selectedItem.map((selectedItem, index) => (
					<li key={index}>
						<p>{selectedItem}</p>
						<button
							onClick={ () => removeItem(selectedItem)}
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
		</div>
	)
}
