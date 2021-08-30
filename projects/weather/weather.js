var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var description = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var feels = document.querySelector('.feels-like');
var humid = document.querySelector('.humid');
var weather = document.querySelector('.weather');
var tempmin = document.querySelector('.tempmin');
var tempmax = document.querySelector('.tempmax');
var country = document.querySelector('.country');



button.addEventListener('click',function(){

  
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=52276fcc4e67e7c6e26af4dba83aae09')
    

    .then(response => response.json())



.then(data => {
    
    var nameValue = data['name'][''];
    var tempValue = data['main']['temp'];
    var descValue = data['weather']['0']['description'];
    var humidValue = data['main']['humidity'];
    var tempminValue = data['main']['temp_min'];
    var tempmaxValue = data['main']['temp_max'];
    var countryValue = data['sys']['country'];
    name.innerHTML = nameValue;
    temp.innerHTML = parseInt((tempValue - 273) *1.8 + 32 ) + '\u00B0' + "F";
    weather.innerHTML = descValue;
    humid.innerHTML = humidValue + "%";
    tempmin.innerHTML = parseInt((tempminValue - 273) *1.8 + 32) + '\u00B0' + "F" ;
    tempmax.innerHTML = parseInt((tempmaxValue - 273) *1.8 + 32) + '\u00B0' + "F"; 
    country.innerHTML = countryValue;


}) 
  
})