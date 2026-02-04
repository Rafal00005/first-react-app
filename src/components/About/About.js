import styles from './About.module.scss';

const About = () => {
	return (
		<div className={styles.about}>
			<h2 className={styles.title}>About</h2>
			<p>
				Welcome to our To-Do application. This is a simple app that helps you
				organize your tasks and keep track of things you want to do. You can
				create columns, add cards, and search for specific tasks.
			</p>
		</div>
	);
};

export default About;
