import React from 'react';
import Image from 'next/image';
import styles from '../styles/footer.module.css';

const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.resources}>
					<h3>Resources</h3>
					<ul>
						<li>Killer Robots</li>
						<li>Unmanned Vehicles</li>
						<li>Machines in warfare</li>
						<li>New technologies</li>
					</ul>
				</div>
				<div className="icons">
					<Image src="/../public/github.png" width={60} height={60} />
					<Image src="/../public/twitter.jpg" width={70} height={60} />
					<Image src="/../public/insta.png" width={60} height={60} />
				</div>
			</div>
		</>
	)
}

export default Footer;