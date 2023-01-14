

function playvideo(){
    let {videoId}=JSON.parse(localStorage.getItem('clicked_data'))
    // console.log(get_data)
    let video_div=document.getElementById("video_details")
    
    let iframe=document.createElement('iframe')
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1`
    iframe.width='100%'
    iframe.height='100%'
    iframe.setAttribute("allowfullscreen",true)

    video_div.append(iframe)




}

document.querySelector("#user").addEventListener('click',useraccount)

function useraccount(){

    window.location='auth.html'
}