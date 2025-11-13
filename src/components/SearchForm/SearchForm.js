import styles from './SearchForm.module.scss';
import Button from '../Button/Button';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <input className={styles.input} type='text' />

      <Button>
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
