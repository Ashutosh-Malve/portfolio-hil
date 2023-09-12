// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				{/* <SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
				/> */}
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Hey, Tech Enthusiast! 🚀</h3>
							</span>
							<p>
							Ready to geek out and change the world? Join us for an exciting and transformative 2-day hackathon where innovation meets the heart! The Heartfulness Code Quest is a unique event that brings together diverse minds across India to collaboratively explore, ideate, and innovate for a brighter future driven by technology.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Event Highlights:
</h3>
									 
								</span>
								<p>
								Diverse Participation across India and an opportunity to collab with people who share a passion for innovation.
Our keynote speakers will share their insights, experiences, and visions for a better future.
Every team will be assigned experienced mentors who will guide and support participants throughout the hackathon. 
We&apos;re all about sharing and caring. Embrace open source, and let&apos;s build a better future together.
Tackle problems that matter. Help save the world one code at a time. Plus, there are prizes for the heroes!
Compete for exciting prizes and recognition.
Connect with like-minded individuals, potential collaborators, and industry professionals. 
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>🎉 Swag Alert: </h3>
								 
								</span>
								<p>
								Who doesn&apos;t love free stuff? Get ready for epic swag – t-shirts, prizes, and more! You'll be the coolest coder on the block.
What are you waiting for Accomodation and Food will be on us, it&apos;s not your average tech event—it&apos;s an adventure! We promise laughs, learning, and loads of coding. Be there or be square!
								</p>
								{/* <p>
								Some key projects complete during this time 👇
								</p> */}
								{/* <ul className={career.list}>
									<li>
										Product attribute and settings automated testing
										<span className={career.subList}><span className={career.bullet}></span>Eradicated critical data input errors</span>
									</li>
									<li>
										Inventory management reporting and automation 
										<span className={career.subList}><span className={career.bullet}></span>Decreased purchasing labour by ~80%</span>
									</li>
									<li>
										Sales management plugin with AJAX shopping cart integration
										<span className={career.subList}><span className={career.bullet}></span>Increased AOV by 8.3%</span>
									</li>
									<li>
										Bespoke ID verification software and WooCommerce integration
										<span className={career.subList}><span className={career.bullet}></span>Decreased Credit Card fraud by 98%</span>
									</li>
								</ul> */}
						 
							</div>
							<div className={career.positionAlt}></div>
						</div>
					
						<div className={career.position}>
							<div className={career.positionContent}>
									<span class={career.positionHeader}>
										<h3>Guidelines:</h3> 
									</span>
								<p>
								Teams can consist of 2 to 3 members, you can create of your own or we can create one for you. Participants are encouraged to consider open-sourcing their projects to contribute to the broader community. <br/>
Participants are free to choose their preferred technology stack for their projects.<br/>
Collaboration among team members is encouraged. <br/>
Participants may seek assistance from mentors and organizers.<br/>
Participants are responsible for bringing their own hardware and software tools.<br/>
Violation of the code of conduct or any other rules may result in disqualification from the hackathon.<br/>
Decisions made by the judges and organizers are final and binding.

								</p>
							 
								 
							 
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Any Queries? </h3>
								<h4>Drop a message on +918359976206</h4> 
							</span>
						 
						</div>
						<div className={career.companyAlt}></div>
					</article>

				 
				</section>
			</Container>
		</Section>
	)
}

