import { Fragment } from "react";

// the props buttonContainer accept component identfer as a value and is talk about the defining a built-in identifer dynamically  */}
 // default value for props
export default function Tabs({children , button, ButtonContainer="menu"}){

    // const ButtonContaniner = buttonContainer

    return(
        <Fragment>

           <ButtonContainer>{button}</ButtonContainer>

            {children}
        </Fragment>
    )
   
}