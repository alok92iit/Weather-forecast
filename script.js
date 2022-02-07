const search =document.getElementById("input")       
search.addEventListener("keydown",(e)=>getCity(e))
    async function getCity(x){
        if(x.which==13){
            const  city =search.value;
            search.value=""
            const key ='75a1125c288f8dba3e33a7218951b256'
            const api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75a1125c288f8dba3e33a7218951b256&units=metric`
          await  fetch(api).then((res) =>{
              return res.json();
          }).then((data)=>
          {
              let weatherDesc =data.weather[0].description
              let iconCode =data.weather[0].icon  
              let name =data.name
              let temp =data.main.temp
              let wind =data.wind.speed
              icon.innerHTML =`<center>
                                      <img src=https://openweathermap.org/img/wn/${iconCode}@2x.png></img>
                                      <p>${weatherDesc}</p>
                              </center>`
              weatherDetail.innerHTML =`<center>
                                              <p>Location ${name}</p>
                                              <p>Tempurature ${temp}</p>
                                              <p>Wind Speed ${wind}</p>
                                        </center>`
          }).catch((err)=>{
            console.log(err)
            alert("You Enter Wrong City Name")
          })   
        }
    }
