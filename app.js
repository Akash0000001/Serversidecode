const http=require("http")
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==="/Home")
    {
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write("<head><title>Homepage</title></head>")
        res.write("<body><h1>Welcome home</h1></body>")
        res.write("</html>")
        res.end()
    }
    else if(url==="/about")
    {
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write("<head><title>About us</title></head>")
        res.write("<body><h1>Welcome to About Us page</h1></body>")
        res.write("</html>")
        res.end()
    }
    else if(url==="/node")
    {
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write("<head><title>Project</title></head>")
        res.write("<body><h1>Welcome to Node Js project</h1></body>")
        res.write("</html>")
        res.end() 
    }

})
server.listen(4000)
