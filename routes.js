const fs=require("fs");
const requesthandler=(req,res)=>{
    const url=req.url
    if(url==="/")
    {
        return fs.readFile("message.txt",{"encoding":"utf-8"},(err,data)=>{
        if (err)
        {
            console.log(err)
        }
        else{
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write("<head><title>Message</title></head>")
        res.write("<body>")
        res.write(`<p>${data}`)
        res.write("<form action=/message method='POST'><input type='text' name='message'></input><input type='submit' value='Send'></input></form>")
        res.write("</body>")
        res.write("</html>")
        return res.end()
        }
    })
    }
    else if(url==="/message")
    {   const body=[];
        req.on("data",chunk=>{
        body.push(chunk)
    })
        return req.on("end",()=>{
            fs.writeFile("message.txt",Buffer.concat(body).toString().split("=")[1],err=>{
                if(err)
                {
                    console.log(err)
                }
                else{
                res.statusCode=302;
                res.setHeader("location","/")
                return res.end();
                }
            });
        })
        
        
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
    
}
//module.exports=requesthandler;

 module.exports={
    handler:requesthandler,
     text:"My name is Akash ranjan"
}

// module.exports.handler=requesthandler;
// module.exports.text="My name is Akash ranjan";

//exports.handler=requesthandler;
//exports.text="My name is Akash ranjan";