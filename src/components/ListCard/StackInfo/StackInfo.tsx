import styles from './StackInfoStyles.module.scss'

interface Stack {
	stack: string[]
	click: (stackInfo: string) => void
}

export const StackInfo = ({ stack, click }: Stack) => {
	return (
		<ul className={styles.stackInfo}>
			{stack.map((stackInfo, index) => (
				<li key={index}>
					<button onClick={() => click(stackInfo)}>{stackInfo}</button>
				</li>
			))}
		</ul>
	)
}
