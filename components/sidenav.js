import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/sidenav.module.css';

const Sidenav = () => {


	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			</Head>

			<div className={styles.wrap}>

				<div id="sidenav" className={styles.sidenav}>
				<a href="#" className="icon">
						<i className="fa fa-bars"></i>
					</a>
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
							<li>Navy</li>
							<li>Air Force</li>
							<li>Ground</li>
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