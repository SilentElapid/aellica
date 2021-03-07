import React from 'react';
import Link from 'next/link';
import styles from '../styles/topnav.module.css';

function Topnav() {
	return (
		<>
			<div className={styles.topnav}>
				<Link href="/"><a className={styles.link}>Home</a></Link>
				<Link href="/about"><a className={styles.link}>About</a></Link>
			</div>
		</>
	)
}

export default Topnav;