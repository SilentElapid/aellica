import Head from 'next/head'
import styles from '../styles/home.module.css';
import Topnav from '../components/topnav.js';

export default function Home() {
	return (
		<>
			<div className={styles.gradient}>
			<Topnav />
				<h1 className={styles.header}>Aellica</h1>

			</div>
			<div className={styles.container}>
				<p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam neque, mattis commodo facilisis vel, rhoncus ut libero. Mauris vitae odio sit amet sapien mattis tristique at sit amet sapien. Integer hendrerit, dui vitae pharetra rhoncus, neque nisl ultricies mi, a ornare purus quam ut augue. Sed nibh velit, molestie quis aliquet semper, dignissim eu diam. Donec eget sollicitudin mauris. Ut ut urna nibh. Integer consectetur, velit at venenatis mattis, nisl erat aliquam enim, euismod cursus ligula tellus non risus. Nam vulputate dignissim neque, ac bibendum nisi. Vivamus faucibus, velit vel hendrerit venenatis, purus odio tincidunt turpis, et egestas est est ut enim. Fusce vitae pellentesque lorem. Ut sodales, ex eu tincidunt dignissim, arcu leo tempor orci, a posuere tellus ipsum sit amet leo. Fusce ut mollis ligula, pellentesque rutrum lacus. Maecenas volutpat nulla nec ligula volutpat malesuada. Donec at risus vel ligula ullamcorper semper eu vitae velit. Curabitur et tempus tellus. Proin auctor sit amet enim ut pellentesque.</p>
			</div>
		</>
	)
}
