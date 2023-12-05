import styles from './ListCardStyles.module.scss'
import { CardItems } from '../../../types/interfaces'
import { motion } from 'framer-motion'

export const ListCard = ({ children, isrecent }: CardItems) => {
	return (
		<motion.li
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x:0 }}
			transition={{ ease: 'easeInOut', duration: 0.6 }}
			className={styles.listCards}
			data-isrecent={isrecent}
		>
			{children}
		</motion.li>
	)
}
