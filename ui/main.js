// counter code
var button = document.getElementbyid('counter');
var counter = 0;
button.onclick = function() {
    counter = counter+1;
    var span=document.getElementbyid('count');
    span.innerhtml = counter.tostring();
    
};