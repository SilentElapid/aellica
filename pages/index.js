import Head from 'next/head'
import styles from '../styles/home.module.css';
import card from '../styles/card.module.css';
import Topnav from '../components/topnav.js';
import Sidenav from '../components/sidenav.js';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Aellica</title>
			</Head>
			<div className={styles.gradient}>
				<Topnav />
				<h1 className={styles.header}>Aellica</h1>
			</div>
			<Sidenav />
			<h1 className={styles.textHeader}>Machines And Warfare</h1>
			<div className={card.card}>
				<img className={styles.img} src="../public/killerRobotOne.jpg" />
				<p className={card.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam neque, mattis commodo facilisis vel, rhoncus ut libero. Mauris vitae odio sit amet sapien mattis tristique at sit amet sapien. Integer hendrerit, dui vitae pharetra rhoncus, neque nisl ultricies mi, a ornare purus quam ut augue. Sed nibh velit, molestie quis aliquet semper, dignissim eu diam</p>
			</div>
			<div className={card.card}>
				<p className={card.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam neque, mattis commodo facilisis vel, rhoncus ut libero. Mauris vitae odio sit amet sapien mattis tristique at sit amet sapien. Integer hendrerit, dui vitae pharetra rhoncus, neque nisl ultricies mi, a ornare purus quam ut augue. Sed nibh velit, molestie quis aliquet semper, dignissim eu diam</p>
			</div>
			<div className={card.card}>
				<p className={card.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam neque, mattis commodo facilisis vel, rhoncus ut libero. Mauris vitae odio sit amet sapien mattis tristique at sit amet sapien. Integer hendrerit, dui vitae pharetra rhoncus, neque nisl ultricies mi, a ornare purus quam ut augue. Sed nibh velit, molestie quis aliquet semper, dignissim eu diam</p>
			</div>
			<div className={styles.container}>
				<h1 className={styles.textHeader}>Introduction</h1>
				<p className={styles.text}>Welcome to Aellica (ayy-lee-ka), and acronym of the words Aequum meaning 'fair' in Latin and the word Bellica, which means warfare in the latin. The translation of these two words into the English language is Fair Warfare. Now, you might be wondering what thats supposed to mean, and the answer is simply, in wars its almost inevitable for innocent people, completly unrelated to the actual fighting going on, to lose their lives. That seems to come as a cost of all wars, but is people losing their lives the only way? Thats where Machines and Advanced Technology come into play, where machines could possible set out to destroy eachother rather than humans. At first, this might sound like some fairy tale or it might seem like someone imagination has run extremly wild, or that someone is extremely obssessed with the Terminator Franchise. Whilst these might all be true to an extent, if we dive in deeper into the possiblily of Artificial Intelligence and Machines fighting our wars on our behalf, it looks like it might possibly be a solution to the problem of innocent people and wildlife losing their lives. Especially since technology is advancing and improving at a rapid pace, almost unimaginable in the days of the first world wars, we may not be too far off the first troops containing only heavly armed machines. However, there are some huge issues that could emerge using robots to fight our battles, and theres no guarantee that innocent lives won't be lost in the process. Whilst its extremely unlikely that Machine Learning gets to the point where a Terminator like apocalypse happens, theres no proof that all the steps that go into mass producing lethal killing machines will all turn out to be succesfull, and by the time these issues have been discovered it could be too late..</p>
			</div>
		</>
	)
}
