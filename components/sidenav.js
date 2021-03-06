import React from 'react';
import styles from '../styles/sidenav.module.css';

const Sidenav = () => {
	return(
		<div className={styles.sidenav}>
			<h4>Table of contents</h4>
			<h3>History:</h3>
			<ul>
				<li>World War One</li>
				<li>Post World War One</li>
				<li>World War Two</li>
				<li>Post World War Two</li>
			</ul>
			<h3>Technology in Warefare</h3>
			<ul>
				<li>Navy</li>
				<li>Air Force</li>
				<li>Ground</li>
				<li>Vehicles</li>
				<li>Other</li>
			</ul>
			<h3>How can Technology Help In Warfare</h3>
			<ul>
				<li>Killer Bots</li>
				<li>Saving lives</li>
			</ul>
			<h3>Summary</h3>
		</div>
	)
}