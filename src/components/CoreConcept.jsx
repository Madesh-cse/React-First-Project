import CoreConcept from '../Header/core-concept.jsx';

import {CORE_CONCEPTS} from '../data.js';


export default function CoreConcepts(){

  return(
    <section id="core-concept">
    <h2>Core Concept</h2>
    <ul className='flex-box'>
      {CORE_CONCEPTS.map((coreconcept) => <CoreConcept key = {coreconcept.title} {...coreconcept}/>)}
      {/* <CoreConcept title={CORE_CONCEPTS[0].title}  description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
      <CoreConcept {...CORE_CONCEPTS[1]}/>
      <CoreConcept {...CORE_CONCEPTS[2]}/>
      <CoreConcept {...CORE_CONCEPTS[3]}/> */}
    </ul>
  </section>
  )

   
}