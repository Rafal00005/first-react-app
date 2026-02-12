import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Column from '../Column/Column';
import SearchForm from '../SearchForm/SearchForm';
import styles from './List.module.scss';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getListById } from '../../redux/ListsRedux';
import { getColumnsByList } from '../../redux/ColumnsRedux';

const List = () => {
	const { listId } = useParams();
	const listData = useSelector((state) => getListById(state, listId));
	const columns = useSelector((state) => getColumnsByList(state, listId));

	return (
		<div className={styles.list}>
			<header className={styles.header}>
				<h2 className={styles.title}>
					{listData?.title}
					<span>{listData?.description}</span>
				</h2>
			</header>
			<p className={styles.description}>{listData?.description}</p>
			<SearchForm />
			<section className={styles.columns}>
				{columns &&
					columns.map((column) => <Column key={column.id} {...column} />)}
			</section>
			<ColumnForm listId={listId} />
		</div>
	);
};

export default List;
