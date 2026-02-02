
    console.log("Before Changing anything", newVar )


{
    var newVar="A/B"
    console.log("Inside Block but value change", newVar)
}

console.log("Afetr Block value", newVar)

console.log("xxxxxxxxxxx")



console.log("Before Changing any value", newVar)
{
    let newVar="newvalue"
    console.log("Inside Block",newVar)
}

console.log("After Block",newVar)

console.log("xxxxxxxxxxx")



var tasktwo='4+a+a4'

try {
    console.log("var ki initial value ", tasktwo)
    var tasktwo='a+3ab+b'
    console.log("var re declare hogaya successfully ", tasktwo)
} catch (error) {
    console.log(error.message)
}


let tasktwoforlet='2+3/7*6'

try {
    console.log("Let ki initial value ", tasktwoforlet)
    let tasktwoforlet='6+8/9*5'
    console.log("let ki redeclare karna ka baad value ", tasktwoforlet)
} catch (error) {
    console.log(error.message)
}

