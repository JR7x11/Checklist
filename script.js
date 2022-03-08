function hideInstructions() {
    document.getElementById('instructions').style.display = "none";
}

// add item to the list
function newItem() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("inputItem").value;
        var x = document.createTextNode(inputValue);
        li.appendChild(x);
        // the app will not accept an empty submission
        if (inputValue === '') {
            alert("Enter a task.");
        } else {
            document.getElementById('instructions').style.display = "block";
            document.getElementById("myItemsList").appendChild(li);
        }
        document.getElementById("inputItem").value = "";
        
        var span = document.createElement("span");
        var txt = document.createTextNode("×");
        span.className = "closeButton";
        span.appendChild(txt);
        li.appendChild(span);
        
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
        }
}

// mark an item completed
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);



// hide item from page when the user clicks close
var close = document.getElementsByClassName("closeButton");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

// put a multiplication sign close option next to each <li> and add a closeButton class
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("div");
    var txt = document.createTextNode("\u00D7");
    span.className = "closeButton";
    span.appendChild(txt);
    myNodelist[i].appendChild(div);
    }