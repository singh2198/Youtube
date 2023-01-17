const API_KEY='AIzaSyDB51AKHa7-SZPJMNpcZW2Z6RRe415rqx0'

const all=async ()=>{
    try{
        
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=21.5922529%2C-158.1147114&locationRadius=10mi&q=surfing&type=video&key=AIzaSyDB51AKHa7-SZPJMNpcZW2Z6RRe415rqx0`)
    
        const data = await res.json()
        console.log(data)
        let actual_data=data.items
        appendvideo(actual_data)
        // console.log(actual_data)
    }
    catch(error){
        console.log(error)
    }
};
// all()


const searchVideo=async ()=>{
try{
    const query =document.getElementById('query').value
    const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${API_KEY}`)

    const data = await res.json()
    console.log(data)
    let actual_data=data.items
    appendvideo(actual_data)
    // console.log(actual_data)
}
catch(error){
    console.log(error)
}
};


// document.querySelector("#live").addEventListener('click',live)
const live= async()=>{
    // console.log("hy")
    try{
        // console.log("hy")
        const live= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=50&q=news&type=video&key=AIzaSyDB51AKHa7-SZPJMNpcZW2Z6RRe415rqx0`)
        const live_data= await live.json()
        let actual_data=live_data.items
        appendvideo(actual_data)

        // console.log(actual_data)
    }
    catch(error){
        console.log(error)
    }
}





// Append Videos 
const appendvideo= (data)=>{
    document.querySelector("#container").innerHTML=""

    data.forEach(({snippet,id:{videoId}})=>{

    

        let url=snippet.thumbnails.medium.url
        let title=snippet.title;
        let channel_title=snippet.channel_title
        
        let div =document.createElement("div")
        
        const img =document.createElement('img')
        img.src=url
        

        let name=document.createElement("h4")
        name.innerText=title

        let c_name= document.createElement("h5")
        c_name.innerText=channel_title


        let data={
            videoId,
            snippet
        }

        div.onclick=()=>{
            storevideodata(data)
        }

        div.append(img,name,c_name)
        document.querySelector("#container").append(div)

    })
}
function storevideodata(data){
    // console.log('data:',data)
    localStorage.setItem('clicked_data',JSON.stringify(data))
    window.location.assign('video.html')
}

document.querySelector("#user").addEventListener('click',useraccount)

function useraccount(){

    window.location='auth.html'
}