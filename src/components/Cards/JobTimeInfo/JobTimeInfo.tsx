import styles from './JobTimeInfo.module.scss'
import { JobTimeInfos } from '../../../types/interfaces'

export const JobTimeInfo = ({ days, contractType, place }: JobTimeInfos) => {
	return (
		<>
			<ul className={styles.timeInfo}>
				<li>
					<p>{days}</p>
				</li>
				<li>
					<p>•</p>
				</li>
				<li>
					<p>{contractType}</p>
				</li>
				<li>
					<p>•</p>
				</li>
				<li>
					<p>{place}</p>
				</li>
			</ul>
			<hr className={styles.mobileLine}/>
		</>
	)
}
