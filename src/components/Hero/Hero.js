import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<PageTitle>
				Things to do<span>soon!</span>
			</PageTitle>
			<p className={styles.description}>
				Interesting things I want to check out
			</p>
		</div>
	);
};

export default Hero;
