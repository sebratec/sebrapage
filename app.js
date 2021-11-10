window.addEventListener('scroll',()=>{
    let content = document.getElementById('img6')
    let contentImg5 = document.getElementById('img5')
    let contentImg4 = document.getElementById('img4')
    let contentPosition = content.getBoundingClientRect().top
    let contentPositionImg4 = content.getBoundingClientRect().top
    let contentPositionImg5 = content.getBoundingClientRect().top
    let screenPosition = window.innerHeight
    if(contentPosition && contentPositionImg5 && contentPositionImg4 <screenPosition  ){
        content.classList.add('move')
        contentImg5.classList.add('moveImg5')
        contentImg4.classList.add('moveImg4')
    }else{
        content.classList.remove('move')
        contentImg4.classList.remove('moveImg4')
        contentImg5.classList.remove('moveImg5')

    }
})