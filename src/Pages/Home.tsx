import { Header } from '../components/Header/Header'
import { JobList } from '../components/JobList/JobList'
import styles from '../styles/PageStyles/Home.module.scss'

export const Home = () => {
	return (
		<div className={styles.homeContainer}>
			<Header />
			<main className={styles.contentContainer}>
				<JobList />
			</main>
		</div>
	)
}
