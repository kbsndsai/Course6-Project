var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("createPost");
var span3 = document.getElementsByClassName("close3")[0];

function onAllPosts() {
  window.open("C:/Users/Lelouch Kei/Desktop/PG Diploma Programs/Front_End_Dev/Course+6+Project+Stub+-+Scribbler/html/postslist.html")  
}

function onCreatePost() {
    modal3.style.display = "block";
    span3.onclick = closeModal3;
    window.onclick = function(event) {
        if (event.target == modal3) {
          modal3.style.display = "none";
        }
      }
}

function closeModal3() {
    modal3.style.display = "none";
}