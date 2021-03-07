import React from 'react';
import Topnav from '../components/topnav.js';
import Footer from '../components/footer.js';
import Head from 'next/head'
import styles from '../styles/home.module.css';

const About = () => {
	return (
		<>
		<Head>
		<title>Aellica | About</title>
		</Head>
			<div className={styles.gradient}>
				<Topnav />
				<h1 className={styles.header}>About</h1>
			</div>
			<h1 className={styles.headerTwo}>What is Aellica About</h1>
			<p className={styles.textSmall}>Aellica is a website that informs you on Autonomous Lethal Weopons being used in warfare. Whilst Aellica may be currently a two page wesbite with a blog like feel to it, in the future more features such as a forum and an area where the latest news on Lethal Autonomous Weapons will be posted to keep people updated.</p>
			<h1 className={styles.headerTwo}>Our Mission</h1>
			<p className={styles.textSmall}>Our mission is to spread awarness over possible machine warfare, this is a topic that is relevant to a lot of people,a dn even if you don't have a computer science background, it isn't too hard to follow</p>
			<Footer />
		</>
	)
}

export default About;