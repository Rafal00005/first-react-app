import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = () => {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		//props.action({ title: title });//
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
