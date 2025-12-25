export function onRequest(context) {
  return new Response(JSON.stringify(getMetaData(context.params.resume)));
}
let myData;
let myData2={
        "saman":{
            "personal":{
                "title":"Saman Maharjan",
                "contact":"9803042890",
                "email":"saman.maharjan96@gmail.com",
                "location":"Teku, Kathmandu",
                "position":"QA Engineer"
            },
            "awards":[
                {
                    "title":"Dean Award",
                    "location":"Taylors University",
                    "date":"2022"
                }
            ],
            "skills":["Initiative",
                "EagertoLearn",
                "Workingin/as a team",
                "Adaptability",
                "Knowledgeontest automation tools cypress and selenium.",
                "SDLC: SCRUM,AGILE,kanban methodology",
                "Software & Operating Systems: Google Docs, Excels, Presentation, Visual Code, Windows",
                "Version Control Tools: Github, Gitlab, Bitbucket",
                "Usedlanguages like Java, Ruby on rails, C#, and .NET.",
                "Project management tools: Trello, Jira.",
                "APItools: Jmeter, Postman.",
                "Documentation tools: Confluence, Testrails, Slack.",
                "Monitoring tools: datadog, logrocket, Heap analytics."],
            "language":["English","Newari","Nepali","Hindi"],
                "experience":[
        {
            "title":"QA Engineer",
            "date":"2020-2025",
            "location":"KUDO.inc",
            "logo":"kudo.png",
            "description":"Assisted in designing wireframes and interactive prototypes using Figma for a mobile-based e-health application.;Created user personas and journey maps to build user-focused designs.;Developed responsive web page layouts and mobile app interfaces based on UI/UX best practices.; Developed low-fidelity and high-fidelity prototypes to simulate user interactions.  ",
            "points":"Analyze and clarify requirements with team members.||Performed manual functional testing of application features and bugs.||Writing test cases and scenarios for the new features and bugs using test rails.||Performed various types of testing such as sanity, smoke, and regression testing in non-production and production environments.||Usedtestrails for production sanity testing and ensuring production stability.||WorkedwithTrello and Jira for project management.||Collaborated with DevOps and Developers for testing new application features and infrastructure changes.||WorkedwithKanban and sprint methodologies in a team.||WorkedinAPItesting on features with the help of Postman||WorkedwithAzure SDK and websockets for machine translation for human speech||Partly handled scrum on project and Release management||Testcase automation with test agent.||Datavalidation to test AI with LLM model implementation.||Extendedtest on integration and POC applications||PlannedandReviewed test plan and scenario||Verification of Application vulnerability threats||Co-Organized onsite event for the team.|| Performed manual functional testing of the application features.|| Identify problem areas and bugs of the application.|| Re-test fixed defects.|| Ensureproduction environment sanity testing and stabilization.|| Performed various types of testing such as sanity, smoke, and regression testing.|| Workedinateamanddiscussed bugs with developers with limited access.|| Exploratory testing on AI-based application|| Functional testing for the data-based applications.|| Usedgoogledocs for documenting bug lists.|| UsedTrello for bug tracking.|| LearnedAPI testing for AI based applications."
        },
        {
            "title":"Bazaar Factory",
            "date":"2018-2019",
            "location":"KUDO.inc",
            "logo":"kudo.png",
            "description":"Assisted in designing wireframes and interactive prototypes using Figma for a mobile-based e-health application.;Created user personas and journey maps to build user-focused designs.;Developed responsive web page layouts and mobile app interfaces based on UI/UX best practices.; Developed low-fidelity and high-fidelity prototypes to simulate user interactions.  ",
            "points":"Developed application features for e-commerce platforms.|| Fixed application bugs and developed features according to clients’ needs.|| Developed dashboard and e-commerce websites using API application and liquid templating.|| UsedTrello, Gitlab/Github/Bitbucket for project management.|| Workedwithversion control systems.|| LearnedRuby onRails and liquid templating.|| Fixedandtested application bugs.|| Learnedsoftware development methodologies."
        },
        {
            "title":"Youth Member",
            "date":"2020-2025",
            "location":"Youth Corner Club",
            "logo":"kudo.png",
            "description":"Assisted in designing wireframes and interactive prototypes using Figma for a mobile-based e-health application.;Created user personas and journey maps to build user-focused designs.;Developed responsive web page layouts and mobile app interfaces based on UI/UX best practices.; Developed low-fidelity and high-fidelity prototypes to simulate user interactions.  "
        },
        {
            "title":"Member",
            "date":"2025-2027",
            "location":"Youth Corner Club",
            "logo":"kudo.png",
            "description":"Assisted in designing wireframes and interactive prototypes using Figma for a mobile-based e-health application.;Created user personas and journey maps to build user-focused designs.;Developed responsive web page layouts and mobile app interfaces based on UI/UX best practices.; Developed low-fidelity and high-fidelity prototypes to simulate user interactions.  "
        }
    ],
            "training":[
                {
                    "title":"Scrum Master workshop",
                    "date":"2022",
                    "location":"Prakash Aryal",
                    "description":"Registered Scrum Master under the Scrumlab platform. Short workshop on learning the scrum methods and its implementation."
                },
                {
                    "title":"Preventing Discrimination & Harassment: Global Employee V3.3",
                    "date":"2021-2025",
                    "location":"KUDO",
                    "description":"Learned about the harassment and discrimination that may arise in the company and learnt ways to prevent it."
                },
                {
                    "title":"Game development training",
                    "date":"2019",
                    "location":"Red Fox Studio",
                    "description":"Learned creating a game using unity 3d game engine using C# as language and Visual code studio as a code editor"
                },
                {
                    "title":"Blockchain Workshop",
                    "date":"2017",
                    "location":"IIMS College",
                    "description":""
                },
                {
                    "title":"ASP.net workshop",
                    "date":"2017",
                    "location":"IIMS College",
                    "description":""
                },
                {
                    "title":"Big data Workshop",
                    "date":"2017",
                    "location":"IIMS College",
                    "description":"Attended the workshop as a participant and learned about the V3, Hadoop, data types."
                },
                {
                    "title":"Mass Communication workshop",
                    "date":"2017",
                    "location":"KTM Metropolitician",
                    "description":"Attended a week long workshop where we learnt the process of hosting."
                },
                {
                    "title":"Workshop Cum training Program on SELF Management",
                    "date":"2017",
                    "location":"IIMS College",
                    "description":"Attended workshop for self management and time management conducted by guruji shri yogacharya arun kumar"
                },
                {
                    "title":"PHP Advance Workshop",
                    "date":"2017",
                    "location":"IIMS College",
                    "description":"Organized a workshop as a vice president and learned about the GitHub and OOPandSQLconcept on PHP."
                },
                {
                    "title":"Microsoft Student Partnership Training- Networking Workshop",
                    "date":"2017",
                    "location":"IIMS College",
                    "description":"Learned about IPv4, IPv6, and networking."
                },
                {
                    "title":"Microsoft Office Package",
                    "date":"2013",
                    "location":"Pentasoft Institute, Jamal",
                    "description":"Learned about Microsoft Word, Excel, and Powerpoint."
                },
                {
                    "title":"Graphic Designing and Web Designing",
                    "date":"2017",
                    "location":"Pentasoft Institute, Jamal",
                    "description":"Learned graphics designing using Adobe Photoshop and web designing using HTML5 and CSS."
                }
            ],
            "projects involved":[],
            "education":[
                {
                    "title":"Masters in computer science and multimedia",
                    "name":"Lincoln university, Hattisar",
                    "date":"2025",
                    "description":"I am currently pursuing a Master’s degree in Computer Science, focusing on advanced topics such as algorithms, machine learning, and software engineering. This program is enhancing my expertise in developing innovative solutions and tackling complex computational problems. My studies are deepening my understanding of cutting-edge technologies and equipping me with the skills needed to drive impactful projects in the tech industry.",
                    "logo":"lincoln.png",
                    "marks":"",
                    "location":"Putalisadak, Kathmandu"
                },
                {
                    "title":"Bachelor in computer Science (Hons)",
                    "name":"UCSI University, Malaysia",
                    "date":"2025",
                    "description":"I hold a Bachelor's degree with Honors in Computing Science, where I gained a solid foundation in core computing principles and technologies. My coursework covered key areas such as programming, data structures, algorithms, and software development, equipping me with both theoretical insights and practical skills. This degree provided me with a robust understanding of computing fundamentals and problem-solving techniques, preparing me for diverse roles in the technology sector.",
                    "logo":"IIMS.png",
                    "marks":"",
                    "location":"Putalisadak, Kathmandu"
                },
                {
                    "title":"High School",
                    "name":"Everest International College",
                    "date":"2020",
                    "description":"I have pursued higher education in Computer Science, building on a foundational background in Commerce. This unique combination has allowed me to integrate technical proficiency with a strong understanding of business principles. My studies in Computer Science have provided me with expertise in programming, data analysis, and system design, while my commerce background has equipped me with insights into financial management, market analysis, and strategic planning. This interdisciplinary approach enables me to effectively bridge the gap between technology and business, driving innovative solutions that align with organizational goals.",
                    "logo":"eic.png",
                    "marks":"3.26 GPA",
                    "location":"Solteemode, Kathmandu"
                },
                {
                    "title":"Gillette International Boarding Secondary School (SLC)",
                    "name":"Tulsi Meher Memorial School",
                    "date":"2017-2018",
                    "description":"I completed my secondary education with excellent results, demonstrating strong academic performance across a broad range of subjects. This solid foundation in key areas such as mathematics, science, and language arts has equipped me with essential skills in problem-solving, critical thinking, and effective communication. My commitment to academic excellence during this period laid the groundwork for my continued success in higher education and professional endeavors.",
                    "logo":"IIMS.png",
                    "marks":"3.45 GPA",
                    "location":"Kalimati, Kathmandu"
                }
            ],
            "summary":"",
            "references":[
                {
                    "name":"Anil Shrestha",
                    "company":"KUDO.inc",
                    "title":"QA Automation Engineer",
                    "email":"nl.shrestha@gmail.com",
                    "phone":""
                },
                {
                    "name":"Kelina Shrestha",
                    "company":"Innovative technology",
                    "title":" Senior Ruby and Rails Developer",
                    "email":"kelishrestha@gmail.com",
                    "phone":"9843267472"
                },
                {
                    "name":" Laurent Le Guyader",
                    "company":"KUDO",
                    "title":"PeopleOperations Manager",
                    "email":"Laurent@kudoway.com",
                    "phone":"9845364868"
                }
            ],
            "links":{
                "facebook":"https://www.facebook.com/saman.maharjan3",
                "x":"https://www.twitter.com/maharjandsaman",
                "instagram":"https://www.instagram.com/samanmaharjan",
                "linkedin":"https://www.linkedin.com/in/saman-maharjan-97s/"
            }
        },
        "delisha":{
    "personal":{
        "name":"Delisha Maharjan",
        "contact":"9826262128",
        "email":"delishamaharjan@gmail.com",
        "location":"Kritipur, Kathmandu",
        "position":"QA Engineer"

    }, 
    "awards":[
        {
            "title":"Dean Award",
            "location":"Taylors University",
            "date":"2022"
        }
    ],
    "skills":[
["figma","75"],
["Canva","75"],
["Adobe Photoshop (Basic)","25"],
["Web Development(HTML,CSS,","75"],
["Time management and problem-solving","75"],
["Communication","75"],
["Wireframing and Prototyping with Figma","58"],
["Database Systems: Oracle Database, MySQL","58"],
["Python","58"],
["MS Excel","58"]
    ],
    "language":["English","Newari","Dutch"],
    "experience":[
        {
            "title":"UI/UX Designer",
            "date":"Jan,2024 - Mar,2024",
            "location":"Academic & Personal Projects",
            "description":"Assisted in designing wireframes and interactive prototypes using Figma for a mobile-based e-health application.;Created user personas and journey maps to build user-focused designs.;Developed responsive web page layouts and mobile app interfaces based on UI/UX best practices.; Developed low-fidelity and high-fidelity prototypes to simulate user interactions.  "
        },
        {
            "title":"UI/UX Designer",
            "date":"Jan,2024 - Mar,2024",
            "location":"Codavatar Internship",
            "description":""
        }
    ],
    "training":[
        {
            "title":"AWS Cloud Practitioner Essetials",
            "date":"2022",
            "location":"IIMS",
            "description":""
        },
        {
            "title":"Exploring Networking with cisco packet tracer",
            "date":"2022",
            "location":"IIMS",
            "description":""
        }
    ],
    "projects involved":[
        {
            "title":"Mobile app (Care Hospital)",
            "date":"2022",
            "location":"https://www.figma.com/design/56BaK7FZNZdY9Yjz16wjh7/DelishaDangol_0355759?node-id=0-1&p=f&t=O6Nv54Xa",
            "description":"Designed a clean and user-friendly UI/UX for Care Hospital,focused on enhancing the digital healthcare experience.;The interface allows users to easily book appointments,log in securely and track their health progress in an intuitive, seamless flow.;Prioritized accessibility, simplicity, and visual clarity to make healthcare more approachable and efficient for all users.  "
        },
        {
            "title":"UI/UX Designer | Business Startup - IIMS College",
            "date":"2022",
            "location":"https://www.figma.com/design/eENKHilrciXatNnJ8WkrSV/Untitled?node-id=0-1&p=f&t=HkniF6apyAm0EA1Z0",
            "description":"   Created high-fidelity prototypes in Figma, focusing on user-centric design.; Mapped user journeys to showcase functionality and business value  "
        },
        {
            "title":"Professionalism at workplace Effective Communication",
            "date":"2022",
            "location":"https://www.youtube.com/watch?v=u0Qc3czZl_g",
            "description":"We have made a video on the basis of our project, Professionalism at Workplace. This video will help you develop the skills you need to excel in professional communication. Discover strategies for expressing yourself and boosting your confidence in any situation, from making presentations to sending emails."
        },
        {
            "title":"Tranquility Guild",
            "date":"2022",
            "location":" ",
            "description":"  I was actively involved in a project focused on sound healing and meditation to support mental well-being. As part of the initiative, we also developed a website platform where individuals facing mental health challenges could openly share their concerns and receive compassionate, supportive responses.  "
        },
        {
            "title":"Mental Health Website Using HTML,CSS & JAVASCRIPT",
            "date":"2022",
            "location":" ",
            "description":"https://github.com/delishadangol1/MayaCare/blob/main/index.html"
        }
    ],
    "education":[
        {
            "title":"Bachelor in computer Science (Hons)",
            "name":"Taylors University, Malaysia",
            "date":"2025",
            "marks":"",
            "location":"Putalisadak, Kathmandu"
        },
        {
            "title":"High School",
            "name":"Hetauda School of Management",
            "date":"2020",
            "marks":"3.26 GPA",
            "location":"Hetauda"
        },
        {
            "title":"Primary School (SEE)",
            "name":"Tulsi Meher Memorial School",
            "date":"2017-2018",
            "marks":"3.45 GPA",
            "location":"Hetauda"
        }
    ],
    "summary":"As an IT undergraduate specializing in UI/UX design, web development, and data analytics, I have gained hands-on experience through a variety of academic projects. These include designing user interfaces, creating digital content, and developing functional web applications. I'm well-versed in tools like Figma and Balsamiq, along with key web development technologies. My enthusiasm for artificial intelligence and data analytics drives me to keep learning and growing in these dynamic fields. Beyond my technical background, working as a receptionist and content creator has strengthened my communication, organization, and time management skills, while also reinforcing a strong sense of professionalism and responsibility.",
    "references":[
        {
            "name":"Saman Maharjan",
            "company":"KUDO.inc",
            "title":"QA Engineer",
            "email":"saman.maharjan96@gmail.com",
            "phone":""
        },
        {
            "name":"Rami Maharjan",
            "company":"Proshore Nepal Pvt.Ltd",
            "title":"Senior.Net Developer",
            "email":"maharjanrami12@gmail.com",
            "phone":"9843267472"
        },
        {
            "name":"Aman Maharjan",
            "company":"EbPearls Pvt.Ltd",
            "title":" Senior Quality Analyst",
            "email":"amanmahrjan18@gmail.com",
            "phone":"9845364868"
        }
    ],
    "links":{
        "facebook":"https://www.facebook.com/saman.maharjan3",
        "x":"https://www.twitter.com/maharjandsaman",
        "instagram":"https://www.instagram.com/samanmaharjan",
        "linkedin":"https://www.linkedin.com/in/saman-maharjan-97s/"
    }
}
};
export function getMetaData(x){
    fetchJSONData("../../saman.json"); 
    return {mydata:{name:"saman",data:myData,tdata:myData2[x]}}
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
        