const rootDir=require("../util/path")
const path=require("path")
const p=path.join(rootDir,"data","contact.json")
const fs=require("fs")
function getcontactsfromfile(cb)
{
    fs.readFile(p,(err,filecontent)=>{
        if(err)
        {
         cb([])
        }
        else{
            cb(JSON.parse(filecontent))
        }
    })
}
module.exports=class contact {
    constructor (n,e) {
        this.name=n
        this.email=e;
    }
    save()
    {
        getcontactsfromfile(contacts=>{
            contacts.push(this)
            fs.writeFile(p,JSON.stringify(contacts),err=>{
                console.log(err)
            })
        })
    }
    static fetchall(cb)
    {
        getcontactsfromfile(cb)
    }
    
}