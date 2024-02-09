let cityName = document.getElementById("cityName");
let loader = document.querySelector('.loader')
let madi = document.getElementById("madi");
let img = "https://www.pngwing.com/en/search?q=sunny+Weather";
let Weather = document.getElementById("W-img");
let body = document.querySelector("body");
let message = document.querySelector('.not-found')
let city = document.getElementById('city')

let time = new Date().getHours();

if (time >= 18) {
  body.classList.add("night");
} else {
  body.classList.add("morning");
}

// This function is now async to handle the await inside


const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lahore`;

async function onAppear(cityVal) {
  const Myurl = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityVal}`;
  message.classList.add('vanish')
  city.innerText = cityVal
  fetch(Myurl, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "X-RapidAPI-Key": "4e9a8e675fmshbd7b1f5bcf33958p180abbjsn08f3cef82a49",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      const condition = document.getElementById("condition");
      const humidity = document.getElementById("humidity");
      const feels = document.getElementById("feels");
      let Weather = document.getElementById("W-img");
      const cloud = document.getElementById("cloud");
      let temp = document.getElementById("temp");
      const body = document.querySelector("body");
      let date = new Date();
      let time = date.getHours();
      // console.log(time)
	  loader.classList.add('vanish') 
      let myKey = Object.keys(result);
      //   condition.innerText = (myKey[3])
      if (parseInt(result.temp) > 30) {
        condition.innerText = "Warmer";
      } else if (parseInt(result.temp) > 40) {
        condition.innerText = "Very Hot";
      } else if (parseInt(result.temp) > 15 && parseInt(result.temp) < 30) {
        condition.innerText = "Normal";
      } else if (parseInt(result.temp) < 15) {
        condition.innerText = "Cold";
      }
      if (result.cloud_pct > 80) {
        if (time >= 18) {
          Weather.src = "assets/2.png";
        } else {
          Weather.src = "assets/rain.png";
          body.classList.add("rainy");
          body.classList.remove("both");
          body.classList.remove("sunny");
        }
        cloud.innerText = "Forcast";
      } else if (result.cloud_pct > 50 && result.cloud_pct < 80) {
        cloud.innerText = "Partially Cloud";
        if (time >= 18) {
          Weather.src = "assets/3.png";
        } else {
          Weather.src = "assets/partial.png";
          body.classList.add("both");
          body.classList.remove("rainy");
          body.classList.remove("sunny");
        }
      } else if (result.cloud_pct > 20 && result.cloud_pct < 50) {
        if (time >= 18) {
          Weather.src = "assets/1.png";
          cloud.innerText = "Clear";
          body.classList.add("night");
        } else {
          Weather.src = "assets/both.png";
          cloud.innerText = "Mostly Sunny";
          body.classList.add("both");
          body.classList.remove("rainy");
          body.classList.remove("sunny");
        }
      } else {
        Weather.src = "assets/sunny.png";
        if (time >= 18) {
          Weather.src = "assets/oMoon.png";
          cloud.innerText = "Clear";
        } else {
          Weather.src = "assets/sunny.png";
          cloud.innerText = "Sunny";

          body.classList.remove("both");
          // body.classList.add('sunny')
          body.classList.remove("rainy");
        }
      }
      temp.innerText = result.temp;
      humidity.innerText = `${myKey[3]} ${result.humidity}%  `;
      feels.innerText = `feels like ${result.feels_like} 'C `;
    })
    .catch((fail) => console.log(fail));
  // let myData = data.json()
  // return myData
}

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  val = cityName.value;
  cityName.value = "";
  // let city = document.getElementById("city");
  city.innerText = val;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${val}`;
  fetching(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4e9a8e675fmshbd7b1f5bcf33958p180abbjsn08f3cef82a49",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  fetching(url, options);

  async function fetching(url, options) {
    try {
      const response = await fetch(url, options);
	  loader.classList.remove('vanish') 
    message.classList.add('vanish')
      const result = await response.json();
      const condition = document.getElementById("condition");
      const humidity = document.getElementById("humidity");
      const feels = document.getElementById("feels");
      let Weather = document.getElementById("W-img");
      const cloud = document.getElementById("cloud");
      let temp = document.getElementById("temp");
      let date = new Date();
      let body = document.querySelector("body");
      let time = date.getHours();
      let myKey = Object.keys(result);
      //   condition.innerText = (myKey[3])
      if (parseInt(result.temp) > 30) {
        condition.innerText = "Warmer";
      } else if (parseInt(result.temp) > 40) {
        condition.innerText = "Very Hot";
      } else if (parseInt(result.temp) > 15 && parseInt(result.temp) < 30) {
        condition.innerText = "Normal";
      } else if (parseInt(result.temp) < 15) {
        condition.innerText = "Cold";
      }
      if (result.cloud_pct > 80) {
        if (time >= 18) {
          Weather.src = "assets/2.png";
        } else {
          Weather.src = "assets/rain.png";
          body.classList.add("rainy");
          body.classList.remove("both");
          body.classList.remove("sunny");
        }
        cloud.innerText = "Forcast";
      } else if (result.cloud_pct > 50 && result.cloud_pct < 80) {
        cloud.innerText = "Partially Cloud";
        if (time >= 18) {
          Weather.src = "assets/3.png";
        } else {
          Weather.src = "assets/partial.png";
          body.classList.add("both");
          body.classList.remove("rainy");
          body.classList.remove("sunny");
        }
      } else if (result.cloud_pct > 20 && result.cloud_pct < 50) {
        if (time >= 18) {
          Weather.src = "assets/1.png";
          cloud.innerText = "Clear";
          body.classList.add("night");
        } else {
          Weather.src = "assets/both.png";
          cloud.innerText = "Mostly Sunny";
          body.classList.add("both");
          body.classList.remove("rainy");
          body.classList.remove("sunny");
        }
      } else {
        Weather.src = "assets/sunny.png";
        if (time >= 18) {
          Weather.src = "assets/oMoon.png";
          cloud.innerText = "Clear";
        } else {
          Weather.src = "assets/sunny.png";
          cloud.innerText = "Sunny";
          body.classList.remove("both");
          // body.classList.add('sunny')
          body.classList.remove("rainy");
          // body.classList.add('')
        }
      }
	  loader.classList.add('vanish') 
      temp.innerText = result.temp;
      humidity.innerText = `${myKey[3]} ${result.humidity}%  `;
      feels.innerText = `feels like ${result.feels_like} 'C `;
      if (myKey[0] === "error") {
        let madi = document.getElementById("madi");
        // console.log(err)
        // console.log(error);
        madi.innerText = "Invalid Place";
        madi.classList.add("appear");
        setTimeout(() => {
          madi.textContent = "";
          madi.classList.remove("appear");
          console.clear();
        }, 4000);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
});

if('geolocation' in navigator){
    console.log(navigator.geolocation)
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      let u = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      let response = fetch(u).then(r=>{loader.classList.remove('vanish') ;return r.json()}).then(data =>{onAppear(data.address.city)}).catch(err=>{console.log(err)})
    })
}