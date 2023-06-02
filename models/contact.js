const contacts =[];
module.exports=class contact {
    constructor (n,e) {
        this.name=n
        this.email=e;
    }
    save()
    {
        contacts.push(this)
    }
    static fetchall()
    {
        return contacts;
    }
}