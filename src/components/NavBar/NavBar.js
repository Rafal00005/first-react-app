import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<Container>
				<div className={styles.navContent}>
					<NavLink to='/' className={styles.logo}>
						<i className='fa fa-tasks'></i>
					</NavLink>
					<ul className={styles.navLinks}>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/'
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/favorite'
							>
								Favorite
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.linkActive : undefined
								}
								to='/about'
							>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
