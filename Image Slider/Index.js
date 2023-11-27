const slider = document.querySelectorAll(".slider");
var counter = 0;
slider.forEach(
    (slider,index) =>{
        slider.style.left = `${index * 100}%`
    }
)

const next = () =>{
    counter++;
    sliderImage();
}
const prev = () =>{
    counter--;
    sliderImage();
}
const sliderImage  = () =>{
    slider.forEach(
        (slider) =>{
            slider.style.transform = `translateX(-${counter*100}%)`
        }
    )
}