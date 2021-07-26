//Set selected animation style
const addAnimation = (item, animation) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.add(`char-animation--${animation}`, "char-animation--hoverStyle");
            resolve();
        },0)
    })
}


//Remove selected animation style
const removeAnimation = (item, animation) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            item.classList.remove(`char-animation--${animation}`, "char-animation--hoverStyle");
            resolve();
        },0)
    })
}


//Toogle selected animation style
// synchronous function, await for each state
async function toogleAnimation (item, animation) {
    await removeAnimation(item, animation);
    await addAnimation(item, animation);
    await setTimeout(() => {
        removeAnimation(item, animation);
    }, 1200);
}


//Toogles selected animation when the cursor passes over each char
const setAnimation = (animation) => {

    const mouseTarget = document.querySelectorAll(`.char-animation--singleChar--${animation}`);

    //set selected animation style when the cursor passes for the first time over the chars
    mouseTarget.forEach( (item) => {
        item.addEventListener('mouseenter', event => {
            addAnimation(item, animation);
        });
    })
    
    //Toogle selected animation style when the cursor leaves the chars
    mouseTarget.forEach((item) => {
        item.addEventListener('mouseleave', event => {
            toogleAnimation(item, animation);    
        });
    })

}


export {removeAnimation, addAnimation, toogleAnimation, setAnimation};
