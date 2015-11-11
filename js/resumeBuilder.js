/*
This is empty on purpose! Your code to build the resume will go here.
 */

//JSON Objects
var skills = ["HTML","SQL","Javascript","Analytics"];

var bio = {
	"name" : "Ross Helenius",
	"role" : "Web Developer",
	"contact" : {
						"mobile" : "978-226-8509",
						"email" : "rhelenius@gmail.com",
						"github" : "gembox",
						"twitter" : "rhelenius118",
						"location" : "Boston"
					},
	"picture" : "https://lh3.googleusercontent.com/-sd8iEO5bxA4/VjS7TK4XNiI/AAAAAAAAAJU/NBqAoL_PRL0/w140-h140-p/MePic.PNGzoom=2&amp;resize=300%2C300",
	"welcome" : "Welcome to my page about me.",
	"skills" : skills
};


//Use the formatting from helper.js
var formattedName =HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);

var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);

var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);

var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);

var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

var formattedSkills = HTMLskills.replace("%data", bio.skills);

//position based off index.html
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#main").append(formattedPicture);
