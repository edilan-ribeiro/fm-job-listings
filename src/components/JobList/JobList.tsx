import styles from './JobListStyles.module.scss'
import jobsData from '../../data/data.json'
import { groupStack } from '../../utils/groupStack'
import { Cards } from './Cards'

export const JobList = () => {
	return (
		<ul className={styles.jobList}>
			{jobsData.map((jobData, index) => (
				<Cards.CardList key={jobData.id}>
					<Cards.Info.JobInfo
						img={jobData.logo}
						company={jobData.company}
						recent={jobData.new}
						featured={jobData.featured}
						position={jobData.position}
					>
						<Cards.Info.JobTimeInfo
							days={jobData.postedAt}
							contractType={jobData.contract}
							place={jobData.location}
						/>
					</Cards.Info.JobInfo>
					<Cards.Stack stack={groupStack(jobsData, index)} />
				</Cards.CardList>
			))}
		</ul>
	)
}