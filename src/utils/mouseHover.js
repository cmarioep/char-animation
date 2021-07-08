
const removeAnimation = (item) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.remove("rubberBand", "text-char-animation-hoverColor");
            console.log("Quito");
            resolve();
        },0)
    })
}

const addAnimation = (item) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.add("rubberBand", "text-char-animation-hoverColor");
            console.log("Pongo");
            resolve();
        },0)
    })
}

async function toogleAnimation (item) {
    await removeAnimation(item);
    await addAnimation(item);
    await setTimeout(() => {
        removeAnimation(item);
    }, 1200);
}




const mouseEvent = () => {

    const mouseTarget = document.querySelectorAll('.singleChar');


    mouseTarget.forEach( (item) => {
        item.addEventListener('mouseenter', e => {
            addAnimation(item);
        });
    })


    mouseTarget.forEach((item) => {
        item.addEventListener('mouseleave', e => {
            toogleAnimation(item);    
        });
    })

}

export {removeAnimation, addAnimation, toogleAnimation, mouseEvent};
