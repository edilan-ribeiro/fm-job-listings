import styles from './ListFilterStyles.module.scss'
import iconRemove from '../../../public/images/icon-remove.svg'

interface listFilter {
	selectedStack: string[]
	clearFilter: React.MouseEventHandler
}

export const ListFilter = ({ selectedStack, clearFilter }: listFilter) => {
	return (
		<div className={styles.listFilter}>
			<ul className={styles.selectedStack}>
				{selectedStack.map((selectedStack, index) => (
					<li key={index}>
						<p>{selectedStack}</p>
						<button onClick={clearFilter} className={styles.removeFilterBtn} title={`Removes ${selectedStack} from filter`}>
							<img src={iconRemove} alt="icon from remove filter button"/>
						</button>
					</li>
				))}
			</ul>
			<button onClick={clearFilter} className={styles.clearBtn}>Clear</button>
		</div>
	)
}
