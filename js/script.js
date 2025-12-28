function updateData(nJSON){
  if(searchTerm=="?x"){
    myData.training.forEach(x=>AddTraining(x))
    myData.experience.forEach(x=>AddExperience(x))
    myData.education.forEach(x=>AddEducation(x))
  }
  document.querySelector(".personal-title").innerHTML=nJSON.personal.title
  document.querySelector(".personal-email").innerHTML=nJSON.personal.email
  document.querySelector(".personal-location").innerHTML=nJSON.personal.location
  document.querySelector(".personal-contact").innerHTML=nJSON.personal.contact
  document.querySelector(".personal-position").innerHTML=nJSON.personal.position
}
function AddEducation(data){
  document.querySelector(".my-education").innerHTML+=`
  <div class="col-lg-6 mb-4">
            <div class="block__87154  bg-dark text-light">
              <span class="quote"><img src="./images/quote.png" alt="Image"></span>
              <blockquote>
                <p>
                  ${data.description}
                </p>
              </blockquote>
              <div class="block__91147 d-flex align-items-center">
                <figure class="mr-4"><img src="./images/lincoln.png" alt="Image" class="img-fluid"></figure>
                <div>
                  <h3 class="text-light">${data.title}</h3>
                  <span class="position">${data.location}</span>
                </div>
              </div>
            </div>
          </div>`
}

function AddExperience(data){
  document.querySelector(".my-experience").innerHTML+=  `        <div class="col-md-6 col-lg-6 mb-4">
          <div class="block__86547 d-block d-xl-flex align-items-stretch">
            <figure class="img" style="background-image: url(${data.logo || "/images/eic.jpg"}); background-size:center;   background-repeat: no-repeat;
  background-size: auto;">
            </figure>
            <div class="h-100">
              <h3 class="mb-4"><a href="#">
               ${data.location}
              </a></h3>
              <div class="block__27192 d-flex pt-1 border-top">
                <a href="#"><span class="icon-person"></span>                     
                    ${data.title}
                </a>
                <a href="/service-single.html#bfExp"><span class="icon-calendar-o"></span>
                    ${data.date}
                </a>
                <!-- <a href="#"><span class="icon-chat"></span> 2</a> -->
              </div>
            </div>
          </div>
        </div>`
}
function AddTraining(data){
  document.querySelector(".my-training").innerHTML+=`<div class="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">
          <a href="/service-single.html" class="block__16443 text-secondary text-center d-block">
            <span class="custom-icon mx-auto"><span class="icon-line-tools d-block"></span></span>
            <h3>${data.title}</h3>
            <p>${data.description}</p>
          </a>

        </div>`
}