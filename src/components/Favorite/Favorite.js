import styles from './Favorite.module.scss';

const Favorite = () => {
	return (
		<div className={styles.favorite}>
			<h2 className={styles.title}>Favorite</h2>
			<p>
				Your favorite cards will appear here. Mark cards as favorite to see them
				in this section.
			</p>
		</div>
	);
};

export default Favorite;
