var button = document.querySelector('.submit');
var inputValue = document.querySelector('.inputvalue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&units=imperial&appid=20ab93081b8029772be804bb0da7de53')

    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['main'];
    
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
    
    .catch (err => alert("City does not exist"))
})

