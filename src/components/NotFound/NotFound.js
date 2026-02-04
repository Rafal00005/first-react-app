import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<PageTitle>404</PageTitle>
			<p>Page not found. Please check the URL.</p>
		</div>
	);
};

export default NotFound;
