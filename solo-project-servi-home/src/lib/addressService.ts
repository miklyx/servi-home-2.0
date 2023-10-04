//import { JSDOM } from 'jsdom' 
const districts =require('./berlinDistricts.json')

const getCountries = async () : Promise<string[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (!response.ok) {
    throw new Error('Unable to fetch countries');
  }
  const rawCountriesList =  await response.json();
  const countries: string[] = rawCountriesList.map((country: any) => country.name.common);
  return countries
};

const getCities = async (country : string) : Promise<string[]> => {
  const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
    method: 'POST',
    body: JSON.stringify({'country' : country})
  });
  const rawCities = await response.json();
  const cities: string[] = rawCities.data;
  return cities
};

export const getStreetsByIndex = async (index:number) : Promise<string[] | undefined>=> {
  //const apiAdr = 'apiKey=eee1cb95010b46c495452f1642cc866d';
  //const url = `https://api.geoapify.com/v1/geocode/search?text=${getStreetsByIndexAndCountry.index}&type=city&format=json&apiKey=${apiAdr}`
  
  const streetsUrl='https://germany-streets.openalfa.com/streets?q='
  try {
    const streetsRaw = await fetch(`${streetsUrl}${index}`);
    const streetsText = await streetsRaw.text();

    //const dom = new JSDOM(streetsText);

    
    const streets: string[] =[];

    //streets = document.querySelector(streetsText).querySelectorAll("a");

    return streets
    //const entryElements = dom.window.document.querySelectorAll('.entry');

    /* entryElements.forEach((entry:any) => {
      const linkElement : HTMLAnchorElement | null = entry.querySelector('a');
      if (linkElement) {
        if (linkElement.textContent) {
          const street = linkElement.textContent.trim();
          streets.push(street);
        }
      }
    });

    return streets;*/
  } catch(e) {
    console.log(e)
  } 
};

export const getStreets = async (index:number): Promise<string[]>  => {
  const response = await fetch(`https://germany-streets.openalfa.com/streets?q=${index}`);
  const body = await response.text();

  const regex = /<a href="(.*?)">(.*?)<\/a>/;

  const streets : any = body.split("\n").map((line) => {
    const match = regex.exec(line);

    if (match) {
      return match[2];
    }
  });

  return streets;
}

export const addressAutocomplete = async (address :string) : Promise<string[]> => {
  const url = 'https://api.geoapify.com/v1/geocode/autocomplete?text='
  const apiKey='048f831ab8a340ba95106ed6ced93856'
  const response = await fetch(`${url}${address}&apiKey=${apiKey}`)
  const body:any = await response.json()
  
  const addressList: string[] = body.features.map((adr: any) => {
    return adr
  });
  console.log(addressList)
  return addressList


}

//getStreets().then((streets) => console.log(streets));


export const getDistrictsOfBerlin = () :string[] => {
  return districts.districts
}


//console.log(getDistrictsOfBerlin())
