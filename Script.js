async function getUser(){
    try{
        const data= await axios.get(`https://6398917e044fa481d6a28718.mockapi.io/api/ggg`)
        console.log(data)
    }
    catch(error){
console.log(error);
    }
}
getUser()



// let f=[
//     {id:1,name:"Faridun"},
//     {id:2,name:"Faridun1"}

// ]
// let button=document.createElement("button")
// button.innerHTML="Far"
// document.body.appendChild(button)
// let inp=document.querySelector(".H")
// button.onclick=function (){
//     let h1=document.createElement("h1")
//     let del=document.createElement("button")
//     del.innerHTML="HH"
//     del.onclick=function(){
//     document.body.removeChild(h1)
//     const {id}=f.target
//     f=f.filter((elem)=>{
//         return elem.id != +id
//     })
//     console.log(f)
//     }
//     h1.innerHTML=inp.value
//     f.push({id:3,name:inp.value})
//     document.body.appendChild(h1)
//     console.log(f)
//     document.body.appendChild(del)
// }
// f.forEach(element => {
//     let h1=document.createElement("h1")
//     h1.innerHTML=element.name
//     document.body.appendChild(h1)
// });



const p=3.14 
try{
    console.log(p*10)
}
catch(e){
    console.log(e)
}
finally{
    console.log("Bilokhirat")
}