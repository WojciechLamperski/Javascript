var content = document.querySelector("#content");
var button = document.querySelector("#show-more");

button.onclick = function(){

    if(content.className == "open"){
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More";
    }else{
        //expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};