export default function Section({title,children, ...props}){ // this spread operator is used to group some data into object
// it going collect all remaining props we going to add is colleted as a new object called props
    return(
        // this props is used to spread some data
        <section {...props}> 
            <h2>{title}</h2>
            {children}
        </section>
    )
}