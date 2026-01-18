import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
import styles from './ColumnForm.module.scss';

const ColumnForm = () => {
	const [title, setTitle] = useState('');
	const [icon, setIcon] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) return;
		dispatch(addColumn({ title, icon }));
		setTitle('');
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
