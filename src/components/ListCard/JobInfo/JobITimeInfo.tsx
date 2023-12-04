import styles from './JobInfoStyles.module.scss'
import { JobTimeInfos } from '../../../interfaces/interfaces'

export const JobTimeInfo = ({ days, contractType, place }: JobTimeInfos) => {
	return (
		<ul className={styles.timeInfo}>
			<li>
				<p>{days}</p>
			</li>
			<li>
				<p>
					<span>•</span>
					{contractType}
				</p>
			</li>
			<li>
				<p>
					<span>•</span>
					{place}
				</p>
			</li>
		</ul>
	)
}
