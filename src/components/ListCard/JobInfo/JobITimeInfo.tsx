import styles from './JobInfoStyles.module.scss'

interface JobTimeInfo {
	days: string
	contractType: string
	place: string
}

export const JobTimeInfo = ({ days, contractType, place }: JobTimeInfo) => {
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
