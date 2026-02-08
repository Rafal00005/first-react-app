import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = ({ columnId }) => {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title.trim()) return;
		dispatch(addCard({ title, columnId, isFavorite: false }));
		setTitle('');
	};

	return (
		<form onSubmit={handleSubmit} className={styles.cardForm}>
			<TextInput
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Add new card'
			/>
			<Button>Add card</Button>
		</form>
	);
};

export default CardForm;
