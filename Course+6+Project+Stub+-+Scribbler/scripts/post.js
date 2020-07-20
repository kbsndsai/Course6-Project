
var phead = document.getElementById("phead");
var pcontent = document.getElementById("para-content");

var edit = document.getElementById("edit");

var save = document.getElementById("savebtn");

var newcontent = document.getElementById("new-content");

var liked = document.getElementById("liked");

function editfunc() {
    phead.style.border = "1px solid pink";
    edit.style.display = "none";
    document.getElementById("pid").style.display = "none";
    

    var button = document.createElement("button");
    button.innerHTML = "Save";

    button.setAttribute("class", "btn btn-danger");
    button.setAttribute("id", "save");       
    
    save.appendChild(button);    

    // var image = document.createElement("i");
    // image.innerHTML = "<i class="+"fa fa-floppy-o"+" aria-hidden="+"true"+"></i>";
    // image.setAttribute("class", "fa fa-floppy-o");
    // image.setAttribute("aria-hidden", "true");

    // save.appendChild("image");

    var content = document.createElement("textarea");
    content.innerHTML = "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.";

    content.setAttribute("rows", 4);
    content.setAttribute("columns", 80)
    

    newcontent.appendChild(content);


    // button.onclick = function() {
    //     var t = content.value;
    //     phead.style.border = "1px solid white";
    //     edit.style.display = "";

    // }
}

var counter = document.createElement("span");
var clicks = 0;
function likefunc() {    
    clicks += 1;
    counter.innerHTML = clicks + " persons like this!";
    counter.setAttribute("id", "counter");
    liked.appendChild(counter);
}

var text1 = document.getElementById("ctext");
var para1 = document.getElementById("para1");
var divtag = document.getElementById("commentslist1");

function commentbtnFunc() {

    var div = document.createElement("div");
    div.setAttribute("id", "commentslist3");

    divtag.appendChild(div);


    var p = document.createElement("p");
    p.innerHTML = text1.value;

    p.setAttribute("id", "para2");

    div.appendChild(p);

}

