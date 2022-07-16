//Closures with examples
/* Closures are functions that have access to the variables that are present in their scope chain even if
the outer function ceases to exist.  
To understand this in more detail, let's understand what a scope chain is. Scope chain refers to the fact
that parent scope does not have access to the variables inside its children's scope, 
but the children's scope does have access to the variables present in its parent scopes.  */
  
  let buttonProps = (borderRadius) =>{ //fn ButtonProps is the closure
    const createVariantButtonProps = (variant, color) => { 
        
         const newProps = {borderRadius, variant, color
            };
    return newProps;
        }
    return createVariantButtonProps; 
    }

//Basicfunctionality of any closure: even if the outer fn ceases to exist, it still has access to its parent variables.
//To see this in action we will now execute the above buttonProps fn:
let primaryButton = buttonProps('1rem');
//calling the buttonProps fn will returns us another fn that is our closure. Now let's execute this closure:

const primaryButtonProps = primaryButton('primary', 'red');
const primaryButtonProps2 = primaryButton ('primary', 'green');

//once the closure is executed it returns the following object:
console.log(primaryButtonProps)//{ borderRadius: '1rem', variant: 'primary', color: 'red' }
console.log(primaryButtonProps2)//{ borderRadius: '1rem', variant: 'primary', color: 'green' }
//primaryButton fn has access to the variable borderRadius that is no present inside it.

//font https://www.freecodecamp.org/news/javascript-closures-explained-with-example/
