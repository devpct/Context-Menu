let rightClick = document.querySelector('.right-click-content')

let left = 0

let mmd = 0

document.addEventListener('contextmenu',(event)=>{
    if(event.pageX > 1700){
        rightClick.style.display = 'none'
    }else{
        left = event.pageX
    }

    if(event.pageY > 650){
        rightClick.style.display = 'none'
    }else{
        mmd = event.pageY
    }

    rightClick.style.display = 'block'
    rightClick.style.top = mmd + 'px'
    rightClick.style.left = left + 'px'
    console.log(event.pageX,event.pageY)
})
