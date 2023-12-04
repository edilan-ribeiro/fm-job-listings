import jobsData from '../../data/data.json'
import { Cards } from '../Cards/Cards'
import { ListFilter } from '../ListFilter/ListFilter'
import { useState } from 'react'
import { Jobs } from '../../types/interfaces'

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

	function createStackAndCheckInclusion(jobData: Jobs) {
		const stack = [
			jobData.role,
			jobData.level,
			...jobData.languages,
			...jobData.tools,
		]
		const isIncluded =
			selectedStack.length === 0 ||
			selectedStack.filter((stackItem) => stack.includes(stackItem)).length === selectedStack.length
		return { stack, isIncluded }
	}

	const filteredJobs = jobsData.filter((jobData) => {
		const { isIncluded } = createStackAndCheckInclusion(jobData)
		return selectedStack.length === 0 || isIncluded
	})

	return (
		<>
			{selectedStack.length > 0 && (
				<ListFilter
					selectedItem={selectedStack}
					clearFilter={() => setSelectedStack([])}
					removeItem={removeSelected}
				/>
			)}
			<Cards.Wrapper>
				{filteredJobs.map((jobData) => {
					const { stack } = createStackAndCheckInclusion(jobData)
					return (
						<Cards.CardList key={jobData.id} isrecent={jobData.new}>
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
							<Cards.Stack stack={stack} click={addStackToSelected} />
						</Cards.CardList>
					)
				})}
			</Cards.Wrapper>
		</>
	)
}
