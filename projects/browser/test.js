
//Targets elements with the tag LI and runs a loop through them, within that loop create a var that creates a element named span. Then creat var named text that creates a text node that is unicode 
//span's class becomes close.
//append the child of span with txt(Unicode X), which creates X's across all elements
//the iteration of li appends the child of span across all elements.  
let li = document.getElementsByTagName("Li");
let i;
for (i = 0; i < li.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\00D57");
    span.className = "close";
    span.appendChild(txt);
    li[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
let i = 0;
for(i=0; i < close.length; i++){
    close.onClick = function(){
        var div = this.parent();
        div.style.display = "none";
    }
}

let select = document.getElementsByName("ul");
select.addEventListner("e", function({
select(e).className="underline";
}))