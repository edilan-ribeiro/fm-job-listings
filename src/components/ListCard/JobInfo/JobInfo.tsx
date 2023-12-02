import { ReactNode } from 'react'
import styles from './JobInfoStyles.module.scss'

interface JobInfo {
	img: string
	company: string
	recent: boolean
	featured: boolean
	position: string
	children: ReactNode
}

export const JobInfo = ({img, company,recent, featured, position, children}: JobInfo) => {
	return (
		<div className={styles.jobInfo}>
			<img src={img} alt={`${company} logo`} />
			<div className={styles.jobDetails}>
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