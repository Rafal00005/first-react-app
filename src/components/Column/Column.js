import styles from './Column.module.scss';

const Column = (props) => {
	return (
		<article className={styles.column}>
			<h2 className={styles.title}>
				<span className={styles.icon + ' fa fa-' + props.icon}></span>
				{props.title}
			</h2>

			{/* TU: zamiast <div> używamy <ul> i renderujemy <li> */}
			<ul className={styles.cards}>
				{props.cards &&
					props.cards.map((card) => <li key={card.id}>{card.title}</li>)}
			</ul>
		</article>
	);
};

export default Column;
