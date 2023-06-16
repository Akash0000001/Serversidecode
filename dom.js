
const Name=document.querySelector("#name");
const email=document.querySelector("#email");
const phone=document.querySelector("#phone");
const date =document.querySelector("#date");
const time=document.querySelector("#time");
const msg=document.querySelector("#msg");
const users=document.querySelector("#users");
const error=document.querySelector("#error")

function showuseronscreen(data){
    const li=document.createElement("li")
    li.className="list-group-item";
    li.id=data.Id
    const tname=document.createTextNode(`Name:${data.Name}, `)
    li.appendChild(tname)
    const temail=document.createTextNode(`Email:${data.Email}, `)
    li.appendChild(temail)
    const tphone=document.createTextNode(`Phone:${data.Phone}, `)
    li.appendChild(tphone)
    const tdate=document.createTextNode(`Date:${data.Date}, `)
    li.appendChild(tdate)
    const ttime=document.createTextNode(`Time:${data.Time} `)
    li.appendChild(ttime)
    li.style.color="red"

    const edit=document.createElement("button")
    edit.style.marginLeft="5px";
    edit.appendChild(document.createTextNode("Edit"))
    edit.setAttribute("value","Edit")
    li.append(edit);
    
    const input=document.createElement("input")
    input.setAttribute("type","submit")
    input.setAttribute("value","Delete")
    li.append(input)

    
    users.appendChild(li)
}

function register(event)
{
    event.preventDefault();
    if(Name.value=="" || email.value=="" || phone.value=="" || date.value=="" || time.value=="")
    {   
        msg.classList.add("error")
        msg.textContent="please enter all the fields!"
        setTimeout(() => {
            msg.firstChild.remove()
            msg.classList.remove("error")
        },3000);
    }
    else
        {   
            
            //To store data in local storage as objects
             const user ={Name:Name.value,Email:email.value,Phone:phone.value,Date:date.value,Time:time.value}
             
            //const user_string=JSON.stringify(user)
            // localStorage.setItem(email.value,user_string)

            //To store data in cloud
            axios.post("http://localhost:3000/users/add-user",user)
            .then(res=>{
            showuseronscreen(res.data)
            Name.value="";
            email.value="";
            phone.value="";
            date.value="";
            time.value="";
        })
            .catch(err=>{
                error.innerHTML="<h4 style='color:red;'>Something went wrong! </h4>"
                setTimeout(()=>error.lastChild.remove(),5000)
                console.log(err)
            })
        }
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:3000/users/get-users")
    .then(res=>{
        res.data.forEach(d=>showuseronscreen(d))
    })
    .catch(err=>{
        error.innerHTML="<h4 style='color:red;'>Something went wrong! </h4>"
        setTimeout(()=>error.lastChild.remove(),5000)
        console.log(err)
    })
})
const form=document.querySelector("#form")
form.addEventListener("submit",register)
const submit=document.querySelector(".btn")
submit.addEventListener("click",(e)=>{
    document.querySelector(".btn").style.background="#4055CC";
})
submit.addEventListener("mouseout",(e)=>{
    document.querySelector("#form").style.background="white";
})
submit.addEventListener("mouseover",(e)=>{
    document.querySelector("#form").style.background="#DDDDDD";
})

users.addEventListener("click",(e)=>{
    
    //To delete the data from cloud and screen.

    
    if(e.target.value=="Delete")
    {
        axios.delete(`http://localhost:3000/users/delete-user/${e.target.parentElement.id}`)
        .then(res=>{
            users.removeChild(e.target.parentElement)
            console.log(res)})
        .catch(err=>{
            error.innerHTML="<h4 style='color:red;'>Something went wrong! </h4>"
            setTimeout(()=>error.lastChild.remove(),5000);
            console.log(err)
        })
        //localStorage.removeItem(email);
    }

    
    else
    {   
        //To delete data from cloud and then edit it.

        
        axios.delete(`http://localhost:3000/users/delete-user/${e.target.parentElement.id}`)
        .then(res=>{
        users.removeChild(e.target.parentElement)
        let em = e.target.parentElement.childNodes[1].textContent
        em=em.substring(em.indexOf(":")+1,em.indexOf(","));

        //localStorage.removeItem(em);
        email.value=em

        let nm = e.target.parentElement.childNodes[0].textContent
        nm=nm.substring(nm.indexOf(":")+1,nm.indexOf(","));
        Name.value=nm;

        let ph = e.target.parentElement.childNodes[2].textContent
        ph=ph.substring(ph.indexOf(":")+1,ph.indexOf(","));
        phone.value=ph;

        let Dt = e.target.parentElement.childNodes[3].textContent
        Dt=Dt.substring(Dt.indexOf(":")+1,Dt.indexOf(","));
        date.value=Dt

        let tm = e.target.parentElement.childNodes[4].textContent
        tm=tm.substring(tm.indexOf(":")+1,tm.indexOf(" "));
        time.value=tm

        console.log(res)
    })
        .catch(err=>{
            console.log(err)
            error.innerHTML="<h4 style='color:red;'>Something went wrong! </h4>"
            setTimeout(()=>error.lastChild.remove(),5000)
        });
        
    }
})