import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import styles from './Column.module.scss';
import CardForm from '../CardForm/CardForm';

const Column = (props) => {
	const allCards = useSelector((state) => state.cards);
	const cards = allCards.filter((card) => card.columnId === props.id);

	return (
		<article className={styles.column}>
			<h2 className={styles.title}>
				<span className={styles.icon + ' fa fa-' + props.icon}></span>
				{props.title}
			</h2>

			<ul className={styles.cards}>
				{cards &&
					cards.map((card) => <Card key={card.id} title={card.title} />)}
			</ul>
			<CardForm columnId={props.id} />
		</article>
	);
};

export default Column;
