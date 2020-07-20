var modal = document.getElementById("myModal");
var btn = document.getElementById("trash");
var span = document.getElementsByClassName("close")[0];

var post1 = document.getElementById("post1");
var post2 = document.getElementById("post2");
var post3 = document.getElementById("post3");
var post4 = document.getElementById("post4");
var post5 = document.getElementById("post5");

var yesbtn = document.getElementById("yes");
var nobtn = document.getElementById("no");

// var post = document.getElementsByClassName("post")[0];

function trash1Func() {
    modal.style.display = "block";
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
       }
    }   

    yesbtn.onclick = function() {
        post1.style.display = "none";
        modal.style.display = "none";
    }
    nobtn.onclick = function() {
        modal.style.display = "none";
    }
}

function trash2Func() {
    modal.style.display = "block";
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
       }
    }   

    yesbtn.onclick = function() {
        post2.style.display = "none";
        modal.style.display = "none";
    }
    nobtn.onclick = function() {
        modal.style.display = "none";
    }
}

function trash3Func() {
    modal.style.display = "block";
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
       }
    }

    yesbtn.onclick = function() {
        post3.style.display = "none";
        modal.style.display = "none";
    }
    nobtn.onclick = function() {
        modal.style.display = "none";
    }
}

function trash4Func() {
    modal.style.display = "block";
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
       }
    }

    yesbtn.onclick = function() {
        post4.style.display = "none";
        modal.style.display = "none";
    }
    nobtn.onclick = function() {
        modal.style.display = "none";
    }
}

function trash5Func() {
    modal.style.display = "block";
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
       }
    }   
    
    yesbtn.onclick = function() {
        post5.style.display = "none";
        modal.style.display = "none";
    }
    nobtn.onclick = function() {
        modal.style.display = "none";
    }
}

function ell1Func() {
    window.open("C:/Users/Lelouch Kei/Desktop/PG Diploma Programs/Front_End_Dev/Course+6+Project+Stub+-+Scribbler/html/post.html")
}

function ell2Func() {
    window.open("C:/Users/Lelouch Kei/Desktop/PG Diploma Programs/Front_End_Dev/Course+6+Project+Stub+-+Scribbler/html/post.html")
}

function ell3Func() {
    window.open("C:/Users/Lelouch Kei/Desktop/PG Diploma Programs/Front_End_Dev/Course+6+Project+Stub+-+Scribbler/html/post.html")
}

function ell4Func() {
    window.open("C:/Users/Lelouch Kei/Desktop/PG Diploma Programs/Front_End_Dev/Course+6+Project+Stub+-+Scribbler/html/post.html")
}

function ell5Func() {
    window.open("C:/Users/Lelouch Kei/Desktop/PG Diploma Programs/Front_End_Dev/Course+6+Project+Stub+-+Scribbler/html/post.html")
}


