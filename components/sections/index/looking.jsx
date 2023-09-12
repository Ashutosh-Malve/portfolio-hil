// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import button 		from '../../../styles/blocks/button.module.scss';

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
				 <h2><span className={looking.highlight2}>Heartathon</span> <span className={looking.highlight}>Code</span>  <span className={looking.highlight}>Quest</span>  2023</h2> 
				 <p className="subtitle">The &quot;Heartathon&quot; is not just a hackathon; it&apos;s a call to arms for the bright minds of today to use their skills and passion to create solutions that resonate with the essence of the Heartfulness Innovation Lab. Together, let us forge a path where technology serves as a bridge, connecting hearts and minds for a more compassionate and enlightened future.</p> 
		 
 				<Container spacing={['verticalLrg']}> 
			
				 </Container>
				<Container spacing={['verticalLrg']}> 	
				 <button	className={`button ${button.primary} ` }
							onClick={ () => window.location = 'https://lu.ma/Heartathon' } >
						{'Register Now'}
					</button>			 
				</Container>
<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
	 <h2 className={looking.json}>motivation : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Eat</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Code</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Meditate</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Sleep</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Repeat</span>,</h2>
				<h2 className={looking.json}>&#125;</h2>
</Container>
			</Container>
		</Section>
	)
}