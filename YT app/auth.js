


 class user{
    // constructor(n){
    //     this.name=n
    // }

    #checkusername(username){
     let value=   username.includes("#") ? false:true

     return value
    }

    #checkpassword(password){
        let pass =(password.length<5)? false :true
        return pass
    }

    async signup(n,e,p,u,m,d){

        let isvalidated=this.#checkusername(u) && this.#checkpassword(p);

        if(isvalidated){
            this.name=n
            this.email=e
            this.password=p
            this.username=u
            this.mobile=m
            this.description=d

            
        }

        let actual_data=JSON.stringify(this)


            try{
                let res=await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
                    method :'POST',
                    body:actual_data,
    
                    headers:{
                        'Content-Type':'application/json',
                    },
                });
    
                let data =await res.json();
    
                console.log(data)
                alert("Signup successfully")
                console.log("user registed successfully")
            }
            catch(error){
                console.log(error)
            }
    }

    async Login(u, p) {
        this.username = u
        this.password = p

        try {
            let login_url = `https://masai-api-mocker.herokuapp.com/auth/login`
            let res = await fetch(login_url, {
                method: "POST",
                body: JSON.stringify(this),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await res.json()
            let token = data.token
            alert("login Succesfully")
            console.log('data: ', data)
            getProfile(this.username, token)
        } 
        catch (error) {
            console.log('error: ', error);
        }; 
    }



    
    
}

 
        
        // let login_details=JSON.stringify(this)

let user_one= new user();

// console.log(user_one)

document.querySelector("#register").addEventListener("submit",submitbtn)

function submitbtn(event){
    event.preventDefault()
    // console.log("hy")

    const name=document.querySelector("#name").value
    const email=document.querySelector("#email").value
    const password=document.querySelector("#password").value
    const username=document.querySelector("#username").value
    const mobile=document.querySelector("#mobile").value
    const description=document.querySelector("#description").value

    user_one.signup(name,email,password,username,mobile,description)

}

function log(){
    event.preventDefault()
    let login_data = {
        username: document.getElementById("login-username").value,
        password: document.getElementById("login-password").value
    } 
    user_one.Login(login_data.username,login_data.password)
}

// async function getProfile(username, token) {
//     let apiProfile = `https://masai-api-mocker.herokuapp.com/user/${username}`

//     let res = await fetch(apiProfile, {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         }
//     })
//     let data = await res.json()
//     console.log('data: ', data);
//     welcomeUser(data.name)
// }

// function welcomeUser(x) {
//     let show = document.querySelector("#result")
//     show.innerHTML = null

//     let div=document.createElement("div")


//     let h2 = document.createElement("h2")
//     h2.innerText = `Hello, Mr. ${x}`
    

//     let p = document.createElement("p")
//     p.innerText = "Welcome Back 😊✌️.."
//     // console.log(h2,p)
//     div.append(h2,p)

//     show.append(div)

//     setTimeout(() => {
//         location.href = 'YTindex.html'
//     }, 2000);
// }

