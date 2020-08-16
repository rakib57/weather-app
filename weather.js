 //load data and key
 const weatherApp ={
    key :'f97e61f503a8e048b1600559da5a31d2',
    baseUrl:'https://api.openweathermap.org/data/2.5/weather'
    // https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
}
//addEventListener for click
document.getElementById('click').addEventListener('click', () =>{ 
    const weatherStor = document.getElementById('searchWeather').value; 
    //  document.getElementById('setCity').innerHTML = weather;

      
    weatherAPI(weatherStor);
})
//weather report 
function weatherAPI (city){
    fetch(`${weatherApp.baseUrl}?q=${city}&appid=${weatherApp.key}&units=metric`)
    .then (weatherCheck =>{
    return weatherCheck.json();
    }).then(weatherShow);  
}

//show weather report
function weatherShow(weatherCheck){
    console.log(weatherCheck);

   let setCity =  document.getElementById('setCity');
   setCity.innerHTML=`${weatherCheck.name} ${weatherCheck.sys.country}`

   let setDegree =  document.getElementById('degree');
   setDegree.innerHTML=`${Math.round(weatherCheck.main.temp)}`

   let weatherName =  document.getElementById('weatherName');
   weatherName.innerHTML=`${weatherCheck.weather[0].main}`

   let min =  document.getElementById('min');
   min.innerHTML=`${Math.round(weatherCheck.main.temp_min)}`

   let max =  document.getElementById('max');
   max.innerText=`${Math.round(weatherCheck.main.temp_max)}`

    let date = document.getElementById('dateManage');
    let get = new Date();
    date.innerHTML = getDateFunction(get);

    if(weatherName.textContent =='Haze'){
        document.body.style.backgroundImage= 'url(images/haze.jpg)'
    
    }
    if(weatherName.textContent =='Clouds'){
        document.body.style.backgroundImage= 'url(images/cloud.jpg)' 
       
    }
    if(weatherName.textContent =='Clear'){
        document.body.style.backgroundImage= 'url(images/clear.jpeg)' 
    }
    if(weatherName.textContent =='Rain'){
        document.body.style.backgroundImage= 'url(images/rain.jpg)'  
    }
    if(weatherName.textContent =='Snow'){
        document.body.style.backgroundImage= 'url(images/snow.jpg)'  
    }
    if(weatherName.textContent =='Thunderstorm'){
        document.body.style.backgroundImage= 'url(images/thunderstorm.jpg)'  
    }

   
}
function getDateFunction(setDate){
    let days = ["Sunday", " Monday", " Tuesday"," Wednesday", " Thursday", "Friday", " Saturday"];
    var months = ["January", "February", "March","April","May","June","July","August","September", "October","November","December"];
    let year = setDate.getFullYear();
    let month = months[setDate.getMonth()];
    let date = setDate.getDate();
    let day = days[setDate.getDay()];
    return `${date} ${month} (${day}), ${year}`
}






