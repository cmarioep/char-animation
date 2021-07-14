
const removeAnimation = (item, animation) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.remove(`char-animator--${animation}`, "char-animator--hoverStyle");
            console.log("Quito");
            resolve();
        },0)
    })
}

const addAnimation = (item, animation) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.add(`char-animator--${animation}`, "char-animator--hoverStyle");
            console.log("Pongo");
            resolve();
        },0)
    })
}

async function toogleAnimation (item, animation) {
    await removeAnimation(item, animation);
    await addAnimation(item, animation);
    await setTimeout(() => {
        removeAnimation(item, animation);
    }, 1200);
}


const mouseEvent = (animation) => {

    const mouseTarget = document.querySelectorAll(`.char-animator--singleChar--${animation}`);


    mouseTarget.forEach( (item) => {
        item.addEventListener('mouseenter', event => {
            addAnimation(item, animation);
        });
    })


    mouseTarget.forEach((item) => {
        item.addEventListener('mouseleave', event => {
            toogleAnimation(item, animation);    
        });
    })

}

export {removeAnimation, addAnimation, toogleAnimation, mouseEvent};
