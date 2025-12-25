function updateData(nJSON){
  document.querySelector(".personal-title").innerHTML=nJSON.personal.title
  document.querySelector(".personal-contact")=nJSON.personal.contact
  document.querySelector(".personal-email")=nJSON.personal.email
  document.querySelector(".personal-location")=nJSON.personal.location
  document.querySelector(".personal-position")=nJSON.personal.position
}
function AddEducation(){
  document.querySelector(".my-education").innerHTML+=`
  <div class="col-lg-6 mb-4">
            <div class="block__87154  bg-dark text-light">
              <span class="quote"><img src="./images/quote.png" alt="Image"></span>
              <blockquote>
                <p>
                  I am currently pursuing a Master’s degree in Computer Science, focusing on advanced topics such as algorithms, machine learning, and software engineering. This program is enhancing my expertise in developing innovative solutions and tackling complex computational problems. My studies are deepening my understanding of cutting-edge technologies and equipping me with the skills needed to drive impactful projects in the tech industry.
                  <!-- I hold a Master’s degree in Computer Science, which has equipped me with a comprehensive understanding of advanced computational theories, software engineering principles, and cutting-edge technologies. My studies covered a range of topics including algorithms, data structures, machine learning, and system architecture, providing me with both theoretical knowledge and practical skills. This advanced education has prepared me to tackle complex technical challenges, drive innovative solutions, and contribute effectively to diverse projects in the tech industry. -->
                </p>
              </blockquote>
              <div class="block__91147 d-flex align-items-center">
                <figure class="mr-4"><img src="./images/lincoln.png" alt="Image" class="img-fluid"></figure>
                <div>
                  <h3 class="text-light">Masters in computer science</h3>
                  <span class="position">Lincoln university</span>
                </div>
              </div>
            </div>
          </div>`
}

function AddExperience(){
  document.querySelector(".my-experience").innerHTML+=  `        <div class="col-md-6 col-lg-6 mb-4">
          <div class="block__86547 d-block d-xl-flex align-items-stretch">
            <figure class="img" style="background-image: url('https://website-cdn.kudo.ai/wp-content/uploads/2024/05/kudo-logo-header.svg'); background-size:center;   background-repeat: no-repeat;
  background-size: auto;">
            </figure>
            <div class="h-100">
              <h3 class="mb-4"><a href="#">
                KUDO
              </a></h3>
              <div class="block__27192 d-flex pt-1 border-top">
                <a href="#"><span class="icon-person"></span>                     
                    Software Quality Engineer
                </a>
                <a href="/service-single.html#bfExp"><span class="icon-calendar-o"></span>
                    4 years
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