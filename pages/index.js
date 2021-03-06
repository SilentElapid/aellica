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
				<div className={styles.wrap}><Image width={200} height={150} alt="robotOne" className={styles.img} src="/../public/killerRobotOne.jpg" /></div>
				<p className={card.text}>The benefits of machines going to war instead of humans could potentially prove to be very beneficial to the amount of lives lost. It would also mean shortages of supplies probably wouldn't be so common if at all. Machine Learning and Artificial Intelligence are constantly evlolving and its only a matter of time before they start impacting our lives in more drastic ways (and not neccesarily in a bad way).</p>
			</div>
			<div className={card.card}>
				<div className={styles.wrap}><Image src="/../public/killerRobotTwo.jpg" alt="robotTwo" width={200} height={150} /></div>
				<p className={card.text}>There are plenty of unmanned machines that are vital in the military already, including but not limited to: warships, driverless vehicles, aircraft, missiles, etc. These machines have slowly become more and more of a vital part of the military, and as technology advances more and more machines will take have more of a vital role in military operations.</p>
			</div>
			<div className={card.card}>
				<div className={styles.wrap}><Image src="/../public/killerRobotThree.jpg" alt="robotThree" width={200} height={150} /></div>
				<p className={card.text}>Theres a lot of advance in technological warfare, with a lot of security organisations investing more and more in the development of ai that can fight possible wars on behalf of the human race. However the cost of some of the resources needed to build these machines is pretty high, with billions b eing invested in fields such as research and testing. The costs should go down, once more efficient methods of testing have been found.</p>
			</div>
			<div className={styles.container}>
				<h1 className={styles.textHeader}>Introduction</h1>
				<p className={styles.text}>Welcome to Aellica (ayy-lee-ka), and acronym of the words Aequum meaning 'fair' in Latin and the word Bellica, which means warfare in the latin. The translation of these two words into the English language is Fair Warfare. Now, you might be wondering what thats supposed to mean, and the answer is simply, in wars its almost inevitable for innocent people, completly unrelated to the actual fighting going on, to lose their lives. That seems to come as a cost of all wars, but is people losing their lives the only way? Thats where Machines and Advanced Technology come into play, where machines could possible set out to destroy eachother rather than humans. At first, this might sound like some fairy tale or it might seem like someone imagination has run extremly wild, or that someone is extremely obssessed with the Terminator Franchise. Whilst these might all be true to an extent, if we dive in deeper into the possiblily of Artificial Intelligence and Machines fighting our wars on our behalf, it looks like it might possibly be a solution to the problem of innocent people and wildlife losing their lives. Especially since technology is advancing and improving at a rapid pace, almost unimaginable in the days of the first world wars, we may not be too far off the first troops containing only heavly armed machines. However, there are some huge issues that could emerge using robots to fight our battles, and theres no guarantee that innocent lives won't be lost in the process. Whilst its extremely unlikely that Machine Learning gets to the point where a Terminator like apocalypse happens, theres no proof that all the steps that go into mass producing lethal killing machines will all turn out to be succesfull, and by the time these issues have been discovered it could be too late..</p>
				<h1 className={styles.textHeader}>History</h1>
				<p>Before we dive into machines and warfare lets take a look at the last two world wars. Its important to lmow the history of the topics we are looking at, to get more of a general understanding.</p>
				<div className={styles.card}>
					<h4>World War One</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan neque ipsum, id fermentum leo congue sit amet. Duis sollicitudin lectus euismod diam luctus, ac rhoncus augue fermentum. Curabitur nulla erat, viverra volutpat arcu in, tempus rhoncus leo. Pellentesque sit amet erat quis dui venenatis rutrum vel sed tortor. Ut varius condimentum orci a facilisis. Cras a lorem eu dolor placerat egestas. Cras et metus sed massa faucibus volutpat. Sed interdum elementum nisi, sit amet porta ex mattis non.</p>
				</div>
				<div className={styles.card}>
					<h4>Post World War One</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan neque ipsum, id fermentum leo congue sit amet. Duis sollicitudin lectus euismod diam luctus, ac rhoncus augue fermentum. Curabitur nulla erat, viverra volutpat arcu in, tempus rhoncus leo. Pellentesque sit amet erat quis dui venenatis rutrum vel sed tortor. Ut varius condimentum orci a facilisis. Cras a lorem eu dolor placerat egestas. Cras et metus sed massa faucibus volutpat. Sed interdum elementum nisi, sit amet porta ex mattis non.</p>
				</div>
				<h1 className={styles.textHeader}>World War Two</h1>
				<div className={styles.card}>
				<h4>World War Two</h4>
				</div>
				<div className={styles.card}>
				<h4>Post World Two</h4>
				</div>
				<h1 className={styles.textHeader}>Technology in Warfare</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan neque ipsum, id fermentum leo congue sit amet. Duis sollicitudin lectus euismod diam luctus, ac rhoncus augue fermentum. Curabitur nulla erat, viverra volutpat arcu in, tempus rhoncus leo. Pellentesque sit amet erat quis dui venenatis rutrum vel sed tortor. Ut varius condimentum orci a facilisis. Cras a lorem eu dolor placerat egestas. Cras et metus sed massa faucibus volutpat. Sed interdum elementum nisi, sit amet porta ex mattis non.</p>
				<h1 className={styles.textHeader}>Vehicles</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan neque ipsum, id fermentum leo congue sit amet. Duis sollicitudin lectus euismod diam luctus, ac rhoncus augue fermentum. Curabitur nulla erat, viverra volutpat arcu in, tempus rhoncus leo. Pellentesque sit amet erat quis dui venenatis rutrum vel sed tortor. Ut varius condimentum orci a facilisis. Cras a lorem eu dolor placerat egestas. Cras et metus sed massa faucibus volutpat. Sed interdum elementum nisi, sit amet porta ex mattis non.</p>
				<h1 className={styles.textHeader}>Technology in Wars</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan neque ipsum, id fermentum leo congue sit amet. Duis sollicitudin lectus euismod diam luctus, ac rhoncus augue fermentum. Curabitur nulla erat, viverra volutpat arcu in, tempus rhoncus leo. Pellentesque sit amet erat quis dui venenatis rutrum vel sed tortor. Ut varius condimentum orci a facilisis. Cras a lorem eu dolor placerat egestas. Cras et metus sed massa faucibus volutpat. Sed interdum elementum nisi, sit amet porta ex mattis non.</p>
			</div>
		</>
	)
}
