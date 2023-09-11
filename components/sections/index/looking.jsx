// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				
			<h4> </h4>
				 <h2><span className={looking.highlight2}>Code</span> <span className={looking.highlight}>For</span>  <span className={looking.highlight}>Cause</span>  Hackathon</h2> 
				 <p className="subtitle">The &quot;Harmony Code Quest&quot; is not just a hackathon; it&apos;s a call to arms for the bright minds of today to use their skills and passion to create solutions that resonate with the essence of the Heartfulness Innovation Lab. Together, let us forge a path where technology serves as a bridge, connecting hearts and minds for a more compassionate and enlightened future.</p> 
				 
				<h2 className={looking.json}>motivation : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Empowering Minds</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Enriching Lives</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}> Enhancing Nature</span>,</h2>

				<h2 className={looking.json}>&#125;</h2>
			</Container>
		</Section>
	)
}