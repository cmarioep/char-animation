
const removeAnimation = (item) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.remove("char-animator--rubberBand", "char-animator--hoverStyle");
            console.log("Quito");
            resolve();
        },0)
    })
}

const addAnimation = (item) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.add("char-animator--rubberBand", "char-animator--hoverStyle");
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
        item.addEventListener('mouseenter', event => {
            addAnimation(item);
        });
    })


    mouseTarget.forEach((item) => {
        item.addEventListener('mouseleave', event => {
            toogleAnimation(item);    
        });
    })

}

export {removeAnimation, addAnimation, toogleAnimation, mouseEvent};
