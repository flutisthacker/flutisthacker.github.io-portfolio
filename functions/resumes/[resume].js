export function onRequest(context) {
  return new Response(JSON.stringify(getMetaData(context.params.resume)));
}

export function getMetaData(x){
    fetchJSONData("../../saman.json"); 
    return {mydata:{name:"saman"}}
}

function fetchJSONData(url) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();  
                })
                .then(data => console.log(data))  
                .catch(error => console.error('Failed to fetch data:', error)); 
        }
        