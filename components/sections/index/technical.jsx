// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Areas of Focus"
					preTitle="......."
					subTitle="The Innovation Lab's primary areas of focus include"
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Plant Sciences and Nature"
							icon={[ 'fat', 'seedling' ]}
							copy=" Investigating the interactions between plants, nature, and human well-being, and exploring innovative ways to harness nature-inspired solutions for various challenges."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<CopyBlock 
								title="Heartfulness Research" 
								copy="Conducting studies and experiments to understand the impact of heartfulness practices on emotional well-being, stress reduction, and overall mental health."
								
							icon={[ 'fat', 'chart-network' ]}
							 iconClass={about.icon}
							containerClass={about.container}
						/>
					 
						<BadgesBlock 
							title="AI/ML Research and Development" 
							copy=" Explore the application of AI and ML in heartfulness research, plant sciences, and nature studies. Develop AI-driven tools that analyze data, identify patterns, and provide insights to drive innovation in these fields.."
							list={ai} 
							block="tech"
							fullContainer="fullContainer" 
							icon="fa-microchip-ai"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			<SectionGridBg gridSize={4}/>
		</Section>
	)
}



const ai	= [
	{ key: 'TensorFlow', 	name: 'TensorFlow', 		type: 'devicon' },
	{ key: 'ScikitLearn', 		name: 'ScikitLearn', 			type: 'devicon' },
	{ key: 'NLTK', 		name: 'NLTK', 				type: 'devicon' },
	{ key: 'Pytorch', 		name: 'Pytorch', 			type: 'devicon' },
	{ key: 'Keras', 		name: 'Keras', 			type: 'devicon' }, 
 
]