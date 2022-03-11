const key = "sckLu8aAYAueQEMbQ8CNWUFWBya9EhwP";

const getCity = async (city) => {
const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
const query = `?apikey=${key}&q=${city}`;

const response = await fetch(base + query);
const data = await response.json();
// console.log(data[0])
return data[0]
};


// get weather
const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${id}?apikey=${key}`;
    const response = await fetch(`${base}${query}`);
    const data = await response.json();
    // console.log(data)
    return data[0]
};

// driver code

// getCity("patna")
// .then((data) => {return getWeather(data.Key)}).then(data => {
//     console.log(data['Temperature']['Metric']['Value']+" "+data['Temperature']['Metric']['Unit'])
// })
// .catch(err => console.log("city locate error: ",err));

