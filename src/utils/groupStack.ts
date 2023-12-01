type StackData = {
	id: number
	company: string
	logo: string
	new: boolean
	featured: boolean
	position: string
	role: string
	level: string
	postedAt: string
	contract: string
	location: string
	languages: string[]
	tools: string[]
}

export function groupStack(jobsData: StackData[], i: number): string[] {
    const stackGrouped = [
        jobsData[i].role,
        jobsData[i].level,
        ...jobsData[i].languages,
        ...jobsData[i].tools,
    ]

    return stackGrouped
}