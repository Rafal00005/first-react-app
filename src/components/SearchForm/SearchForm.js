import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';

const SearchForm = () => {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateSearchString(searchValue));
	};

	return (
		<form onSubmit={handleSubmit} className={styles.searchForm}>
			<input
				className={styles.input}
				type='text'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder='Search cards...'
			/>
			<Button>
				<i className='fa fa-search'></i>
			</Button>
		</form>
	);
};

export default SearchForm;
