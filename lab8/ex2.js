var images = ["img1.jpg", "img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
var imageIndex = 0;
var imageLength = images.length - 1;

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
}