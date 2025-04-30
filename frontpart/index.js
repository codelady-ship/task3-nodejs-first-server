const url="http://localhost:8080/"

fetch(url,{
    method:"post"
})
.then(res=>res.json())
.then((data)=>{
    console.log(data)
})