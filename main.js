// You need to write two functions.

// A function to add two values together. This function needs to define two parameters - the two numbers that you want to add together.
// A function to multiply a single number by 2. This function takes one parameter - the number you want to multiply by 2.
// In the adding function, add the values of the two parameters and return the result
// In the multiplication function, multiply the value of the single parameter by 2 and return the result.

const add = (valueOne, valueTwo) => {
    const sum = valueOne + valueTwo
    return sum
    }
    
    const multiplyByTwo = (sumOne) => {
        const multipliedSum = sumOne * 2
        return multipliedSum
    }
    
    const answer = add(2,2)
    console.log(answer)
    
    const nextAnswer = multiplyByTwo(2)
    console.log(nextAnswer)

// After the functions are defined, invoke them in the correct order.

// Invoke the adding function, provide two values as arguments, and the store what gets returned into a variable.
// Then invoke the multiplication function and provide the variable from the previous step as the argument. Store the result into a variable.
// Use console.log() to output the end result of the multiplication function.
// As an example, if you pass 4 and 14 to the first function, then the final output should be 36.