import styles from './JobInfoStyles.module.scss'

interface JobInfo {
	img: string
	company: string
	recent?: boolean
	featured?: boolean
	position: string
	days: string
	contractType: string
	place: string
}

export const JobInfo = ({img, company,recent, featured, position, days, contractType, place,}: JobInfo) => {
	return (
		<div className={styles.jobInfo}>
			<img src={img} alt={`${company} logo`} />
			<div className={styles.jobDeets}>
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
			</div>
		</div>
	)
}