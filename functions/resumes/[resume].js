export function onRequest(context) {
  return new Response(JSON.stringify(getMetaData(context.params.resume)));
}
let myData;
export function getMetaData(x){
    fetchJSONData("../../saman.json"); 
    return {mydata:{name:"saman",data:myData}}
}

function fetchJSONData(url) {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();  
                })
                .then(data => {
                    myData=data
                })  
                .catch(error => console.error('Failed to fetch data:', error)); 
        }
        