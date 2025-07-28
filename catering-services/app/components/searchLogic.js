// the flow will be :
// 1. user will search for city or a location . 
// 2. that location will get converted to lat and log by using Nominatin api 
// 3. then will create a bundling box () using that lat and lon (a bundling box is a rectangular box on map , where we have to look for it will reduce the search space .)
// 4. then we will use overpass API to fetch the restaurants or catering services around that bundling box 
// 5. will display the result in a list or a map  .

// here i will use the logic for nomintin api 

export default async function cityToLocation(city){
  try{
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}&countrycodes=in`
    async function  fetchLocation(){
        try{
             const res = await fetch(url,{headers:{
              "Accept": "*/*",
              "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
              }})
            console.log(res)
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`)
            }
            const data = await res.json()
            return data?.[0].boundingbox; 
        }
        catch(error){
            console.error("Error fetching location data:", error.message) ;
            return null 
        }
    }
    const location  = await fetchLocation();
    const south = location?.[0], north = location[1], west = location[2], east = location[3]; 
    const overpassQuery = `
      [out:json][timeout:10];
      (
        node["amenity"="restaurant"](${south},${west},${north},${east});
        way["amenity"="restaurant"](${south},${west},${north},${east});
        relation["amenity"="restaurant"](${south},${west},${north},${east});
      );
      out center;
    `;
    const overpassRes = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: overpassQuery,
      });
    const overpassData = await overpassRes.json();
    const elements = overpassData.elements;
    return elements?.[0]?elements.slice(0,30):elements

  }
  catch(err){
    console.log(err)
    return []
  }
}