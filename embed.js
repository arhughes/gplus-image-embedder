var COMMENT_CLASS = "a-f-i-W-p";

var imageRegex = /\/[^:?]+\.(jpg|jpeg|png|gif|bmp|svg)$/i;

function getImageUrl(href)
{
    // can do special cases here if needed
    return String(href);
}

function isImage(href)
{
    // can do special cases here if needed
    return getImageUrl(href).match(imageRegex);
}

function embedImages(source)
{
    var spans = source.getElementsByTagName("span");

    for (var i = 0; i < spans.length; i++)
    {
        if (spans[i].className == COMMENT_CLASS)
        {
            var links = spans[i].getElementsByTagName("a");
            for (var j = 0; j < links.length; j++)
            {
                console.log(links[j].href);
                if (isImage(links[j]))
                {
                    var img = document.createElement("img");
                    img.className = "imageloader";
                    img.src = links[j].href;
                    spans[i].appendChild(img);
                }
            }
        }
    }
}

embedImages(document);
document.addEventListener('DOMNodeInserted', function(e)
{
    embedImages(e.srcElement);
});
