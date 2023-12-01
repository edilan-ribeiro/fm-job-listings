import styles from './StackInfoStyles.module.scss'

interface Stack {
	stack: string[]
}

export const StackInfo = ({ stack }: Stack) => {
	return (
		<ul className={styles.stackInfo}>
			{stack.map((stackInfo, index) => (
				<li key={index}>
					<button>{stackInfo}</button>
				</li>
			))}
		</ul>
	)
}
