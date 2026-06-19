
let cvData; 
  const fetchSomeData=async (uMethod,url)=>{
        fetch(url, {
              method: uMethod, // Method: POST
              headers: {
              'Content-Type': 'application/json', // Send data as JSON
              }
              })
              .then(response => {
              if (!response.ok) {
              throw new Error('Network response was not ok');
              }
              return response.json(); // Parse the JSON response from the server
              })
              .then(data => {
              cvData=data
              })    
              .catch((error) => {
              console.error('There was a problem with the fetch operation:', error); // Handle errors
                  });
          
          }
          let [searchTerm,searchNote]=location.search.split("=")
          fetchSomeData("GET","/resumes/"+searchNote ||"saman")