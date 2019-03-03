// IMG1
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var link = document.getElementById("link").href;

    img.onclick= function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = '<div id="caption"><a id="link" href='+link+' style ="text-align:center">View</a>  </div> ' + this.alt;
    
    }

captionText = document.getElementById("caption");


modal.onclick = function() { 
  modal.style.display = "none";
}


////IMG2
var modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
var link2 = document.getElementById("link2").href;

    img2.onclick= function(){
        modal2.style.display = "block";
        modalImg2.src = this.src;
        captionText2.innerHTML = '<div id="caption2"><a id="link" href='+link2+'>View</a> <br><br> <br>  <p><font color="white">Working on...</font></p> </div> ';
    
    }

captionText2 = document.getElementById("caption2");


modal2.onclick = function() { 
  modal2.style.display = "none";
}

////IMG3
var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
var link3 = document.getElementById("link3").href;

    img3.onclick= function(){
        modal3.style.display = "block";
        modalImg3.src = this.src;
        captionText3.innerHTML = '<div id="caption3"><a id="link" href='+link3+'>View</a> <br><br> <br>  <p><font color="white">Working on...</font></p> </div> ';
    
    }

captionText3 = document.getElementById("caption3");


modal3.onclick = function() { 
  modal3.style.display = "none";
}



////IMG4
var modal4 = document.getElementById('myModal4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById('myImg4');
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
var link4 = document.getElementById("link4").href;

    img4.onclick= function(){
        modal4.style.display = "block";
        modalImg4.src = this.src;
        captionText4.innerHTML = '<div id="caption4"><a id="link" href='+link4+'>View</a> <br><br> <br>  <p><font color="white">Working on...</font></p> </div> ';
    
    }

captionText4 = document.getElementById("caption4");


modal4.onclick = function() { 
  modal4.style.display = "none";
}


