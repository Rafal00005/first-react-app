import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/CardsRedux';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
	const favoriteCards = useSelector(getFavoriteCards);

	return (
		<div className={styles.favorite}>
			<PageTitle>Favorite cards</PageTitle>
			{favoriteCards.length > 0 ? (
				<section className={styles.cards}>
					{favoriteCards.map((card) => (
						<Card key={card.id} {...card} showRemoveButton={true} />
					))}
				</section>
			) : (
				<p className={styles.noCards}>No cards...</p>
			)}
		</div>
	);
};

export default Favorite;
