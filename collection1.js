var productcontainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div"); // Use querySelectorAll to get all matching elements

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase(); // Use event.target.value.toUpperCase() to convert to uppercase

    for (var count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("p").textContent.toUpperCase(); // Use textContent to get the text content

        if (productname.indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
