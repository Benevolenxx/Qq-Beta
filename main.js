window.addEventListener('scroll', ()=>{
    var ProgressionIndicator = (window.scrollY) / 1317;
    console.log(ProgressionIndicator)
    document.querySelector('.ProgressionLine').style.transform = "scaleX(" + ProgressionIndicator +")"
})
var NavigationIndiactor = 0;
document.querySelector('.NavOpener').addEventListener('click', ()=>{
    if(NavigationIndiactor % 2 === 0){
        document.querySelector('.Navigation').style.transform = "translateX(0)"
        document.querySelector('#B1').style.transformOrigin = "left"
    }
    else{
        document.querySelector('.Navigation').style.transform = "translateX(100%)"
        document.querySelector('#B1').style.transformOrigin = "right"
    }
    NavigationIndiactor++;
})
