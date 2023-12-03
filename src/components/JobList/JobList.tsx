import styles from './JobListStyles.module.scss'
import jobsData from '../../data/data.json'
import { groupStack } from '../../utils/groupStack'
import { Cards } from './Cards'
import { ListFilter } from '../ListFilter/ListFilter'
import { useState } from 'react'

export const JobList = () => {
	const [selectedStack, setSelectedStack] = useState<string[]>([])

	function addStackToSelected(stackInfo: string) {
		if (!selectedStack.includes(stackInfo)) {
			setSelectedStack((prevState) => [...prevState, stackInfo])
		}
	}

	function removeSelected(selectedItem: string) {
		setSelectedStack((prevState) => {
			return prevState.filter(
				(itemToBeRemoved) => itemToBeRemoved !== selectedItem
			)
		})
	}

	return (
		<>
			{selectedStack.length > 0 && (
				<ListFilter
					selectedItem={selectedStack}
					clearFilter={() => setSelectedStack([])}
					removeItem={removeSelected}
				/>
			)}
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
						<Cards.Stack
							stack={groupStack(jobsData, index)}
							click={addStackToSelected}
						/>
					</Cards.CardList>
				))}
			</ul>
		</>
	)
}
