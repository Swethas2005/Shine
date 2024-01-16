let prev = document.getElementById("prev");
let next = document.getElementById("next");

let imageArr=[
     "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticcand.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fniims_web.webp&w=3840&q=75",
     "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticcand.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop_16Oct.jpg&w=3840&q=75", 
     "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticcand.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FICICI_D.jpg&w=3840&q=75" ,
     "https://www.shine.com/_next/image?url=https%3A%2F%2Fstaticcand.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=3840&q=75"     
]

let image = document.querySelector("#slide")

let currentImage = 0
image.setAttribute("src" ,imageArr[currentImage]);

prev.addEventListener("click",function()
{
     currentImage--;
     if (currentImage < 0) {
        currentImage = imageArr.length - 1;
    }
     image.setAttribute("src" ,imageArr[currentImage]);

});

next.addEventListener("click",function()
{
     currentImage++;
     if (currentImage >= imageArr.length) {
        currentImage = 0;
    }
     image.setAttribute("src" ,imageArr[currentImage]);
});