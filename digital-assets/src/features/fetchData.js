
export const cryptoOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_DIGITAL_ASSET_RAPID_API,
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
}

export const fetchData = async(url, options) => {
       const json =  await fetch(url, options)
	            .then(response => response.json())
                .catch(err => console.error(err));
    return json;
}


export const newsOptions = {
  method: 'GET',
  headers: {
    'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': process.env.REACT_APP_DIGITAL_ASSET_RAPID_API,
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
}

export const fetchNews = async(url, options) => {
     const json =  await fetch(url, options)
            .then(response => response.json())
              .catch(err => console.error(err));
  return json;
}