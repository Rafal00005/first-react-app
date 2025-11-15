import { useState } from 'react';
import shortid from 'shortid';
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
	// stan kolumn
	const [columns, setColumns] = useState([
		{
			id: 1,
			title: 'Books',
			icon: 'book',
			cards: [
				{ id: 1, title: 'This is Going to Hurt' },
				{ id: 2, title: 'Interpreter of Maladies' },
			],
		},
		{
			id: 2,
			title: 'Movies',
			icon: 'film',
			cards: [
				{ id: 1, title: 'Harry Potter' },
				{ id: 2, title: 'Star Wars' },
			],
		},
		{
			id: 3,
			title: 'Games',
			icon: 'gamepad',
			cards: [
				{ id: 1, title: 'The Witcher' },
				{ id: 2, title: 'Skyrim' },
			],
		},
	]);

	// nowe kolumny startują z pustym cards: []
	const addColumn = (newColumn) => {
		setColumns((prev) => [
			...prev,
			{
				id: shortid(),
				title: newColumn.title,
				icon: newColumn.icon,
				cards: [],
			},
		]);
	};

	// ZMIENIONA FUNKCJA - używa prev zamiast columns
	const addCard = (newCard, columnId) => {
		setColumns((prev) =>
			prev.map((column) => {
				if (column.id === columnId)
					return {
						...column,
						cards: [...column.cards, { id: shortid(), title: newCard.title }],
					};
				else return column;
			})
		);
	};

	return (
		<div className={styles.list}>
			<section className={styles.columns}>
				{columns.map((col) => (
					<Column
						key={col.id}
						id={col.id}
						title={col.title}
						icon={col.icon}
						cards={col.cards}
						addCard={addCard}
					/>
				))}
			</section>

			{/* formularz przeniesiony do osobnego komponentu */}
			<ColumnForm action={addColumn} />
		</div>
	);
};

export default List;
