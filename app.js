const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==="/")
    {
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write("<head><title>Message</title></head>")
        res.write("<body>")
        res.write("<h1>Enter Message:</h1>")
        res.write("<form action=/message method='POST'><input type='text' name='message'></input><input type='submit' value='Send'></input></form>")
        res.write("</body>")
        res.write("</html>")
        return res.end()
    }
    else if(url==="/message")
    {
        fs.writeFileSync("message.txt","Dummy");
        res.statusCode=302;
        res.setHeader("location","/")
        return res.end();
    }
    else if(url==="/about")
    {
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write("<head><title>About us</title></head>")
        res.write("<body><h1>Welcome to About Us page</h1></body>")
        res.write("</html>")
        return res.end()
    }
    else if(url==="/node")
    {
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write("<head><title>Project</title></head>")
        res.write("<body><h1>Welcome to Node Js project</h1></body>")
        res.write("</html>")
        return res.end() 
    }
    res.setHeader("Content-Type","text/html");
    res.write("<html>")
    res.write("<head><title>Project</title></head>")
    res.write("<body><h1>Welcome to Node Js project</h1></body>")
    res.write("</html>")
    return res.end() 

})
server.listen(4000)

