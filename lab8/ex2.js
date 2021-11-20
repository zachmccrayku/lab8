let images = ["\img1.jpg","\img2.jpg","\img3.jpg","\img4.jpg","\img5.jpg"];
let imageIndex = 0;
let imageLength = images.length - 1;

function getImage(n)
{
    imageIndex += n;
    if(imageIndex > imageLength)
    {
        imageIndex = 0;
    }
    if(imageIndex < 0)
    {
        imageIndex = imageLength;
    }

    document.getElementById("slides").src = images[imageIndex];
    document.title = "Slideshow [" + (imageIndex + 1) + "]";
}
