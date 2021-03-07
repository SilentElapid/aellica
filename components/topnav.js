import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/topnav.module.css';

function Topnav() {
	return (
		<>
			<div className={styles.topnav}>
				<Link href="/about"><a className={styles.link}>About</a></Link>
				<Link href="/"><a className={styles.link}>Home</a></Link>
			</div>
		</>
	)
}

export default Topnav;