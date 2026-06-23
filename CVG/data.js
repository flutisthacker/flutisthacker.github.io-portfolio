
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
                    cvData=data;
                    storedData(true,data,searchNote)
              })    
              .catch((error) => {
              console.error('There was a problem with the fetch operation:', error); // Handle errors
                  });
          
          }
          let [searchTerm,searchNote]=location.search.split("=")
            verification(searchNote)
          
            function verification(name){
                  if(localStorage.getItem("CVDataName")!=name||localStorage.getItem("CVData")==null){
                        fetchSomeData("GET","/resumes/"+searchNote ||"saman")
                  }else{
                        cvData=storedData(false)
                  }
          }
          function storedData(set,data,name){
            if(set==false){
                  return JSON.parse(localStorage.getItem("CVData"))
            }
            else{
                  localStorage.setItem("CVData",JSON.stringify(data))
                  localStorage.setItem("CVDataName",name)
            }
          }