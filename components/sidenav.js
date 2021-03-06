import React from 'react';
import styles from '../styles/sidenav.module.css';

const Sidenav = () => {
	return (
		<>
			<div className={styles.wrap}>
				<div id="sidenav" className={styles.sidenav}>
					<div className={styles.links}>
						<h3>Table of contents:</h3>
						<a className={styles.link} href="#welcome"><h4>Welcome</h4></a>
						<h3>History:</h3>
						<ul>
							<li>World War One</li>
							<li>Post World War One</li>
							<li>World War Two</li>
							<li>Post World War Two</li>
						</ul>
						<h3>Technology in Warefare:</h3>
						<ul>
							<li>Vehicles</li>
							<li>Other</li>
						</ul>
						<h3>How can Technology Help In Warfare:</h3>
						<ul>
							<li>Killer Bots</li>
							<li>Saving lives</li>
						</ul>
						<h3>Summary</h3>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sidenav;