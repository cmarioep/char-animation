
const removeAnimation = (item) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.remove("rubberBand");
            console.log("Quito");
            resolve();
        },0)
    })
}

const addAnimation = (item) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.add("rubberBand");
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
            item.classList.add("rubberBand");
        });
    })


    mouseTarget.forEach((item) => {
        item.addEventListener('mouseleave', e => {
            toogleAnimation(item);    
        });
    })

}

export {removeAnimation, addAnimation, toogleAnimation};
