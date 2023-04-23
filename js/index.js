//Creating List of Skills part

//creating an array of technical skills
var skills = ["Problem-Solving", "Leadership", "Web Development", "Integrated development environments (IDEs)",
 "JavaScript", "HTML", "CSS"];

//Using DOM Selection to get id and assign it to a variable 
const skillsSection = document.getElementById("skills");

//Will get the element ul and store it in the variable
const skillsList = skillsSection.querySelector("ul");

//will get the array length
var arraylength = skills.length;

for ( var i = 0; i < arraylength; i++) {
    //will create the element "li"
    const skill = document.createElement("li");

    //will assign values from array to "li"
    skill.innerText = skills[i];

    //will append "li" to skillsList
    skillsList.appendChild(skill);
}


//Assignment 4.3 section

//Will hide the "Messages" html section until the submit button is clicked
document.getElementById("messages").style.display = "none";


const messageForm = document.getElementsByName("leave_message");
const messageSection = document.getElementById("messages");

document.addEventListener("submit", function(event) {
    //prevents the page from auto refreshing
    event.preventDefault(); 

    //will unhide the messages section once there is something submitted 
    document.getElementById("messages").style.display = "inline";


    const name = event.target.userName.value;
    const email = event.target.userEmail.value;
    const message = event.target.userMessage.value;
    console.log(name, email, message);
    
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span>`;

    //will append the newMessage list to the unordered list
    messageList.appendChild(newMessage);
        


//========================== REMOVE BUTTON  ===========================//


    //Create a new button called "Remove"
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.id = "remove_button";
    
    //Event listener for when the button if clicked will delete the newMessage (li)
    removeButton.addEventListener("click", () => {
        event.preventDefault();
        newMessage.remove();
    });



 

//========================== EDIT BUTTON  ===========================//

    //Creates a new "Edit" button
    const editButton = document.createElement("button");
    editButton.innerText = 'Edit';
    editButton.id = "edit_button"

    //creates an event listener for when they click the edit button
    editButton.addEventListener("click", () => {

        //will show a prompt window at the top to edit the "message" section 
        let editMessage = prompt("Edit your message? ", `${message}`)
        newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${editMessage}</span>`;
        newMessage.appendChild(editButton);

        newMessage.appendChild(removeButton);

    })

    //will add margins around the edit button to give it a bit cleaner look
    editButton.style.margin = "10px";
    //Will append the edit button to the newMessage section
    newMessage.appendChild(editButton);
    //will append the remove button to the newMessage 
    newMessage.appendChild(removeButton);
    
    messageForm[0].reset();

});

//===================== Footer Section ================================//

//Creates an object that stores the different date methods
var theDate = new Date(),
    thisYear = theDate.getFullYear(),
    today = theDate.getDate();

//Selects the footer element 
const footer = document.querySelector("footer");

//creates a new paragraph element and stores it in the variable 
const copyright = document.createElement("p");

//sets the innner HTML to the copyright element previously created to display my name and year
copyright.innerHTML ="David Jaimes " + thisYear;

//will append the copyright element to the footer to display it "will overright the text in HTML file"
footer.appendChild(copyright);

/* ============================== lESSON-6-1 XMLHTTOREQUEST BELOW HERE================= */

var githubRequest = new XMLHttpRequest();

/*does a requestion to our personal Github account*/
githubRequest.open('GET', 'https://api.github.com/users/zeroban/repos');
githubRequest.send();

/*function that will handle the request from Github and log it in the console. */
githubRequest.onload = function() {
    let repositories = JSON.parse(this.response);
    console.log(repositories);


let projectSection = document.getElementById('projects');
let projectList = projectSection.querySelector('ul');

/*for loop will create a new li for the number of repsitories*/
for (i = 0; i < repositories.length; i++) {
    // let project = document.createElement('li');
    var repos_buttons = document.createElement('button');
    // var repos_description = document.createElement('p');
    repos_buttons.class = "gitHub_links";
    repos_buttons.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a> `;
    
    // project.innerHTML = repositories[i].name;
    projectList.appendChild(repos_buttons);
    // projectList.appendChild(project);
}}

