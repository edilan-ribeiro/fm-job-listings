import { JobTimeInfo } from './JobTimeInfo/JobTimeInfo'
import { JobInfo } from './JobInfo/JobInfo'
import { ListCard } from './ListCard/ListCard'
import { ListWrapper } from './ListWrapper/ListWrapper'
import { StackInfo } from './StackInfo/StackInfo'

export const Cards = {
	Wrapper: ListWrapper,
	CardList: ListCard,
	Info: { JobInfo, JobTimeInfo },
	Stack: StackInfo,
}
