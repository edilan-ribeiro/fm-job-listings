import styles from './JobInfoStyles.module.scss'
import { JobInfos } from '../../../types/interfaces'


export const JobInfo = ({img, company,recent, featured, position, children}: JobInfos) => {
	return (
		<div className={styles.jobInfo}>
			<img src={img} alt={`${company} logo`} />
			<div>
				<div>
					<div className={styles.topInfo}>
						<h2>{company}</h2>
						<div className={styles.recent}>
							{recent && <p>new!</p>}
							{featured && <p>featured</p>}
						</div>
					</div>
					<h3 className={styles.jobName}>{position}</h3>
				</div>
				{children}
			</div>
		</div>
	)
}