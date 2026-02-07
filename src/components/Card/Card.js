import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
	const dispatch = useDispatch();

	const handleToggleFavorite = () => {
		dispatch(toggleCardFavorite(id));
	};

	return (
		<div className={styles.card}>
			<button
				className={`${styles.favoriteButton} ${
					isFavorite ? styles.active : ''
				}`}
				onClick={handleToggleFavorite}
			>
				<i className='fa fa-star-o'></i>
			</button>
			<div className={styles.cardContent}>
				<h3>{title}</h3>
			</div>
		</div>
	);
};

export default Card;
