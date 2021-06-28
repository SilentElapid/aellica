import React from 'react';
import Image from 'next/image';
import styles from '../styles/footer.module.css';

const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.resources}>
					<h2>Resources</h2>
					<ul>
						<li>Killer Robots</li>
						<li>Unmanned Vehicles</li>
						<li>Machines in warfare</li>
						<li>New technologies</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Footer;