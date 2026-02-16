
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






for (var i=0; i<4; i++){
    setTimeout(()=>{
        console.log("Var ki value =",i)
        
    },2000
    )
}

for(let i=0; i<=5; i++){
    setTimeout(()=>{
                console.log("let ki value =",i)
    },4000)
}


for(let i=0; i<=7; i++){
    const value=i
    
    setTimeout(()=>{
                console.log("Const ki value =",value)
    },5000)
}


const end=()=>{
    setTimeout(()=>{
        console.log("All delays are finished")
    },6000)
}

end()




const messageGenerataor=()=>{

let userName=document.getElementById("userName").value
let course=document.getElementById("userCourse").value
let userPercentage=document.getElementById("userPercetage").value

    return(`Hello ${userName}
    Congratulations on completing ${course}.
    You have completed ${userPercentage}% of the course.
    Keep up the great work!`)
}

const handleSubmit=()=>{
    let message=messageGenerataor()
    document.getElementById("task").innerHTML=message
}




const resultGenerator=()=>{
    let userPercentage=document.getElementById("userPercentage1").value
    userPercentage=Number(userPercentage)
    let userResult=document.getElementById("result")
    
    if(userPercentage >= 85){
        userResult.innerHTML=`Your percentage is ${userPercentage} and your grade A <br> Congratulatios!`
        userResult.style.color="Green"
    }else if(userPercentage >= 75){
        userResult.innerHTML=`Your percentage is ${userPercentage} and your grade B`
        userResult.style.color="Green"
    }else if(userPercentage >= 65){
        userResult.innerHTML=`Your percentage is ${userPercentage} and your grade C`
        userResult.style.color="yellow"
    }else if(userPercentage >= 50){
        userResult.innerHTML=`Your percentage is ${userPercentage} and your grade D`
        userResult.style.color="orange"
    }else{
        userResult.innerHTML=`Your percentage is ${userPercentage} and you're FAIL`
        userResult.style.color="red"
    }
}


let taskThree={
    name:"Subhan",
    generalfunction:function(){
        console.log("Regularfunction behaviour while using this",this.name)
    },
    arrowFunction: ()=>{
        console.log("Arrow Function behaviour while using this",this.name)
    },

    
}
taskThree.generalfunction()
taskThree.arrowFunction()


let arr=[1,2,3,4]


console.log(arr.map(num => num*2))

console.log(arr.map((num)=>{
    return num*2
}))