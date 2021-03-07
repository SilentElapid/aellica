import Head from 'next/head';
import styles from '../styles/home.module.css';
import card from '../styles/card.module.css';
import Topnav from '../components/topnav.js';
import Sidenav from '../components/sidenav.js';
import Image from 'next/image';
import Footer from '../components/footer.js';

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
				<div className={styles.wrap}>
				<Image width={200} height={150} alt="robotOne" className={styles.img} src="/../public/killerRobotOne.jpg"/></div>
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
				<div className={styles.cardTwo}>
					<h4 className={card.headerSmall}>World War One</h4>
					<p>World War One other know as the great war, was a 4 year conflict starting in the year of 1914 and ending in late 1918, with the 'Central Forces' Germany, Austria-Hungary, and Turkey fighting against the Allied Forces which consisted of France, Great Britain, Italy, Russia, Japan, and then later on the United States. World War One had plenty of factors that lead up to the war starting, politics, military and an assasination helped contribute to the occurance of World War One. World War one was the start of poison gas being used as a lethal weapon in warfare. The war ended with the Allied Forces coming out victorious.</p>
				</div>
				<div className={card.cardTwo}>
					<h4 className={card.headerSmall}>Post World War One</h4>
					<p>Post World War Once left Germany in a huge mess with the Treaty of Versailles forcing them to pay 132 billion German Marks in reparation fees. Germany relied heavly on loans from the USA to help pay their reparation fees to the Allied Forces. Germany had no say in the Treaty of Versailles, they had to pay the reparations according to the Allied Rules and the Allied Rules only. Germany was doing well in paying back the reparation fees when the American Wall Street stock market crashed causing USA to stop call back all loans. This lead to a huge crisis in Germany and the current democratic government at the time got heavy opposition from far right and far left parties. Over the next few years after the market crashthe Nazi party rose to power, and the rest is history.</p>
				</div>

				<h1 className={styles.textHeader}>World War Two</h1>
				<div className={card.cardTwo}>
				<h4>World War Two</h4>
				<p>World War Two was slightly longer than World War One beggining in 1939 and ending in 1945. The Nazi Party had rose to power in Germany and then the leader of the Nazi Party known as Adolph Hitler invaded Poland on September the 1st  and then declared war on Great Britian and France, leading to an all out global war, with the Axis versus the Allies. The Axis main powers where Germany, Italy, and Japan whilst the Allies main firepower came from France, Great Britain, The United States, and the Soviet Union. The Allied Forces came victorious for the second time in the last few decades with the war officially ending when Japan surrendered. The war used poison gas quite frequently and was a big advance in technological warfare.</p>
				</div>
				<div className={card.cardTwo}>
				<h4>Post World War Two</h4>
				<p>World War Two was the last World War, with wars such as the Cold War and plenty of civil wars happening. Technology advancement reached new heights, and firepower became more and more lethal. The Allied Forces also created the United Nations to try and avoid another war of the scale of World War Two.</p>
				</div>
				<h1 className={styles.textHeader}>What if a World War was to occur now?</h1>
				<p>If there was to be a World War in todays times, it would be almost certainly catastrophic beyond imaginable, not only for the human race but for the wildlife and well being of this planet. With firepower lethal enough to wipe out entire countries in one go, we have to be very careful in what waters we tread in. With nuclear weapons and a lot more other dangerous weapons being developed, one wrong move could be the final straw for the wellbeing of the planet we all know as Planet Earth. So a question that might spring to mind is, if theres so much firepower at the disposal of governments then is human combat even needed? The answer is no there isn't, whilst new technologies and weapons, war tactics, techniques have been developed there really is no need for human combat. Well, there is no need for it assuming we take the right steps in avoiding it. Unmanned aircrafts could  save money on things such as training, and supplying accomodate resources for humans. However this brings the issue of aircraft having to be supplied with the appropiate resources to operate without a physical person controlling the acions of the aircraft. Even thouh most planes run without human interaction, in the context of a dogfight or being chased down by enemy aircraft putting on autopilot at a cruising speed isn't the smartest idea. However technologies to fit aircraft with sensors and weapons etc to help in these situations is being developed and should be more efficient in the near future. The navy already has unmanned vessels in production and bigger and better technologies are being tested, with the uprise of driverless vehicles with some driverless vehicles already being used by military forces. There are also plenty of other vehicles being used for warfare. But then theres also the prospect of using Unmanned Machines for on field combat.</p>
				<h1 className={styles.textHeader}>Killer Robots</h1>
				<p>Killer Robots or if you want a more official name Lethal Autonomous Weapons, are basically machines that use algorithms and machine learning to in essence destroy targets. Drones are a good example of Lethal Autonomous Weapons, and plenty of other machines can be used. Now, what makes machines superior to humans you may be wondering. Well for one, robots tend to surpass the average human brain in speed and remembering things, a human brain is a very complex thing, with the likes of scientists and researchers finding it hard to work their heads round it. So inevitably its not too easy to replicate what is a human brain in a couple thousand if not hundred lines of code. Yet, people have found a way to train machines and robots to do the same things that most humans can do, not only that but do it more efficiently.  Machines can learn to do things almost with the same ease a human can, and its things like this that would make robots excellent weapons in warfare. They can be awesome spies, with literally a robot the size of a fly being able to collect ones data and information. They can also be taught who to spy on or what to spy on, and log back all that information to a physical human being or another machine for some other process. Robots can make excellent vehicles as pre mentioned and could be vital in saving lives out in the battlefield, or delivering supplies to the front line. Machines can mass produce essential resources hundreds of times faster than what an average human factory worker can. But most importantly they can physically fight our wars. Lethal Autonomous Weapons can be trained to destroy other Lethal Autonomous Weapons, they can be shown to target enemy machines and can do so much more a human can. It also means less innocent lives are lost as a result of the war, and it can cut down on costs needed to pay for things such as food supplies, more personel, the list goes on. Whilst some may argue that an all robot war may cost a lot more, especially to create more robots and develop new robots, with most engineers earning around 6 figures annually to work on stuff like that. In the long run as ai advances robots will be able to start making new robots and mass producing them, effectivily cutting down on costs.</p>
				<h1 className={styles.textHeader}>What are the downsides?</h1>
				<p>Whilst it may sound all good, whats the worst case scenario? Well, like most wars the intent at first isn't to create mass devastation, as time progresses things may start to get more and more extreme and dangerous. Machines may no longer be created to help decrease the destruction, but instead created to make the most destruction. The limits with creating deadly machines are not as limited as human on field combat, old warfare tactics would have to be ditched and newer more deadly ones devised, the possiblily of badly engineered machines could be devastating and whats not to say that a lot more damage will be inflicted with the machines alone than all the past wars put together. When thinking of killer robots one of the first things that may come to mind is terminator like machines with shotguns or laser blasters. But in reality its unlikely that any warfaring machine will resemble the looks or attributes of a human. Most machines being rover like vehicles with firepower mounted on them to inflict as much damage as possible, and then you add the prospect of aircraft and sea vessels, it gets a lot more complicated, and one things for sure, it probably wouldn't do the enviroment any good. Whats not to say that these machines won't be created to destroy humans instead of other machines, or instead of targetting cities, data-centers and research labatories are targetted. The possibilities are endless</p>
			</div>
			<Footer />
		</>
	)
}