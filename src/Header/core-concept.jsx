export default function CoreConcept({image,title,description}){  // by destructing a object 

    return(
  
      <div className='box'>
        <img src ={image} alt ="..."/>
       <h3>{title}</h3>
       <p>{description}</p>
      </div>
    )
  }