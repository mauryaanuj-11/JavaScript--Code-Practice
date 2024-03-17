let arr=[1,2,3,4,5,6,7]



const books=[
    {title:"Book1",genre:"history", publish:1998, edition:2001},
    {title:"Book2",genre:"fiction", publish:1994, edition:2000},
    {title:"Book3",genre:"history", publish:1990, edition:1998},
    {title:"Book4",genre:"comedey", publish:1996, edition:2004},
    {title:"Book5",genre:"horror", publish:2000, edition:2006}
]


let userBooks=books.filter(function(item){
    return (item.genre==="history" || item.genre==="horror")
})


const number=[1,2,3,4,5,6,7,8,9,10]
// const myNumber=number
//                 .map((item)=> (item*10))
//                 .map((item)=> item-5)
//                 .filter((num)=> num>24)
                
// console.log(myNumber)


const myNum=[1,4,3]
let ans=myNum.reduce((acc,currVal)=> {
    console.log(`accumulator: ${acc}   current value : ${currVal}`)
    return (acc+currVal)
},0)
console.log(ans)

let result=myNum.reduce((accum,curr)=> (accum+curr),0)
console.log(result)