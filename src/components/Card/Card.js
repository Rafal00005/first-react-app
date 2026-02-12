import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/CardsRedux';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite, showRemoveButton }) => {
	const dispatch = useDispatch();

	const handleToggleFavorite = () => {
		dispatch(toggleCardFavorite(id));
	};

	const handleRemoveCard = () => {
		dispatch(removeCard(id));
	};

	return (
		<div className={styles.card}>
			<div className={styles.cardContent}>
				<h3>{title}</h3>
			</div>
			<div className={styles.buttons}>
				{showRemoveButton && (
					<button className={styles.removeButton} onClick={handleRemoveCard}>
						<i className='fa fa-trash-o'></i>
					</button>
				)}
				<button
					className={`${styles.favoriteButton} ${
						isFavorite ? styles.active : ''
					}`}
					onClick={handleToggleFavorite}
				>
					<i className='fa fa-star-o'></i>
				</button>
			</div>
		</div>
	);
};

export default Card;
