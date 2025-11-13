import { useState } from 'react';
import styles from './ColumnForm.module.scss';

const ColumnForm = ({ action }) => {
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) return;
		action({ title, icon }); // ← przekazujemy oba pola
		setTitle(''); // czyścimy formularz
		setIcon('');
	};

	return (
		<form className={styles.columnForm} onSubmit={handleSubmit}>
			Title:{' '}
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='New column title'
			/>
			Icon:{' '}
			<input
				type='text'
				value={icon}
				onChange={(e) => setIcon(e.target.value)}
				placeholder='e.g. book / film / gamepad'
			/>
			<button>Add column</button>
		</form>
	);
};

export default ColumnForm;
