document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // console. log (date.toLocaleTimeString());
},1000)