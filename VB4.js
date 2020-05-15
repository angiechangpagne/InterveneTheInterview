function setup() {
  // Write your code here.
 
  document.getElementById("commentList").appendChild(document.createElement("li").appendChild(document.createTextNode(document.getElementById("postComment").value)));
}

// Example case. 
document.body.innerHTML = `
<ul id='commentList'>
</ul>
<form>
  <input type='text' id='comment'/>
  <input type='button' id='postComment' value='Post'/>
</form>`;

setup();

$("#comment").val("test");
$("#postComment").click();
console.log(document.body.innerHTML);