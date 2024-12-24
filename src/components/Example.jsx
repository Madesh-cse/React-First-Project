
import {useState} from "react";

import '../App.css'

import Section from "../components/section.jsx"

import TabButton  from "../Header/TabButton.jsx";

import Tabs from "./tabs.jsx";

import { EXAMPLES } from "../data";



export default function Example(){


    const[selectedTopic,setSelectedTopic] = useState('')

  
  function clickhandle(SelectButton){

    setSelectedTopic(SelectButton); // initially = "click the button"
}

    return(
        <Section title = "example"  className='example'>
          
          <Tabs   button={<div className="tabs">

          <TabButton isSelected={selectedTopic==='components'} onselect={ () => clickhandle('components')}>Components</TabButton>   
          <TabButton isSelected={selectedTopic==='jsx'} onselect={ () => clickhandle('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==='props'} onselect={ () => clickhandle('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic==='state'} onselect={ () => clickhandle('state')}>State</TabButton>
          </div>}> 
            {!selectedTopic ? <p>Please select the topic</p>:<div id="tab-content">
           <h3>{EXAMPLES[selectedTopic].Title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
        </div>}
        </Tabs>
        {/* Here component is default assigned to the props.children when it betwwen open and close tag  it i s know a composite component*/}
  {/* // The function is passed as a value to the props define to a component the prop which is already define a prop in a custom component that prop is define to click event. */}
      </Section>
    )
} 