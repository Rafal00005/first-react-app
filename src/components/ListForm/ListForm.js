import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/ListsRedux';
import styles from './ListForm.module.scss';

const ListForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) return;
		dispatch(addList({ title, description }));
		setTitle('');
		setDescription('');
	};

	return (
		<form className={styles.listForm} onSubmit={handleSubmit}>
			<div className={styles.row}>
				<label>Title:</label>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='New list title'
				/>
			</div>
			<div className={styles.row}>
				<label>Description:</label>
				<input
					type='text'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='List description'
				/>
			</div>
			<button>Add list</button>
		</form>
	);
};

export default ListForm;
