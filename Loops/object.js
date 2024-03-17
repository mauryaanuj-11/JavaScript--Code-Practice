// let arr=[1,2,3,4,"hitesh"]

// for (const it of arr) {
//    // console.log(it)
// }

let map=new Map([
    ['IN', "India"],['Fr', "Franch"]
])
map.set('USA', "United State of America")

let myobject={
    js : "JavaScript",
    cpp : "C++",
    py : " python"
}

// for (const key in myobject) {
//   // console.log(key ,":", myobject[key])
// }

const student=["Aaditya", "Aman", "Akki", "Ashok", "Anuj"]

// student.forEach((item)=>{
//     console.log(item)
// } )

function printItem(item){
    if(item=="Aman")
    item="dfkjlksa"
    console.log(item)
}
//student.forEach(printItem)

// student.forEach((item,index,arr)=>
//    // console.log(item,index,arr)
// )

const registration=[
    {
        Name: "Anuj Maurya",
        Branch: "Information Technology",
        Room: 124 
    },
    {
        Name: "Aadtitya Tripathi",
        Branch: "Information Technology",
        Room: 125 
    },
    {
        Name: "Ratan Tiwari",
        Branch: "Computer Science",
        Room: 224
    }
]

registration.forEach((item)=>
    console.log(`Your name is ${item.Name}\nYour branch is ${item.Branch}\nAlotted room is ${item.Room}`)
    
)








