const http=require("http")
const server=http.createServer((req,res)=>{
    console.log("My Name is Akash Ranjan")
})
server.listen(4000)