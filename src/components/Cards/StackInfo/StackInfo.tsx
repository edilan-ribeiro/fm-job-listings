import styles from './StackInfoStyles.module.scss'
import { StackInfos } from '../../../types/interfaces'

export const StackInfo = ({ stack, click }: StackInfos) => {
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
