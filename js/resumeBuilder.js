/*
This is empty on purpose! Your code to build the resume will go here.
 */

//JSON Objects

var bio = {
	"name" : "Ross Helenius",
	"role" : "Web Developer",
	"contact" : {
						"mobile" : "978-226-8509",
						"email" : "rhelenius@gmail.com",
						"github" : "gembox",
						"twitter" : "rhelenius118",
						"location" : ["Boston, MA"]
					},
	"picture" : "https://lh3.googleusercontent.com/-sd8iEO5bxA4/VjS7TK4XNiI/AAAAAAAAAJU/NBqAoL_PRL0/w140-h140-p/MePic.PNGzoom=2&amp;resize=300%2C300",
	"welcome" : "Welcome to my page about me.",
	"skills" : ["HTML","Javascript","SQL","Analytics"]
};

var work = {
	"jobs" : [
		{
		"employer" : "athenahealth",
		"title" :  "Data Solutions Manager",
		"location" : "Watertown, MA",
		"years" : "2014-Current",
		"description" : "Manage custom report requests."
		},
		{
		"employer" : "UMass Memorial",
		"title" :  "Applications/Systems Specialist",
		"location" : "Worcester, MA",
		"years" : "2012-2014",
		"description" : "Perform custom report and interface work."
		},
		{
		"employer" : "Alere",
		"title" :  "Solutions Analyst",
		"location" : "Waltham, MA",
		"years" : "2012",
		"description" : "Manage features of the application for the windows platform."
		},
		{
		"employer" : "TEK Systems",
		"title" :  "Implementation Consultant",
		"location" : "Nashville, TN",
		"years" : "2011-2012",
		"description" : "Consult on the Allscripts EHR rollout."
		},
		{
		"employer" : "Lahey Clinic",
		"title" :  "Systems Analyst III",
		"location" : "Burlington, MA",
		"years" : "2009-2011",
		"description" : "Perform various functions on the Allscripts EHR rollout."
		}
	]
};

var education = {
	"schools" : [
		{
		"name" : "UMass Lowell",
		"gradyear" : "2010",
		"location" : "Lowell, MA",
		"degree" : "Certificate",
		"major" : "Information Technology"
		},
		{
		"name" : "Rollins College",
		"gradyear" : "2005",
		"location" : "Winter Park, FL",
		"degree" : "BA",
		"major" : "Psychology"
		}
	]
};

var project = {
	"projects" : [
		{
			"title" : "Test Title",
			"dates" : "2015",
			"description" : "Some text here.",
			"images" : ["https://lh3.googleusercontent.com/-sd8iEO5bxA4/VjS7TK4XNiI/AAAAAAAAAJU/NBqAoL_PRL0/w140-h140-p/MePic.PNGzoom=2&amp;resize=300%2C300"]
		},
		{
			"title" : "Test Title2",
			"dates" : "2015",
			"description" : "Some text here.2",
			"images" : ["https://lh3.googleusercontent.com/-sd8iEO5bxA4/VjS7TK4XNiI/AAAAAAAAAJU/NBqAoL_PRL0/w140-h140-p/MePic.PNGzoom=2&amp;resize=300%2C300"]
		}
	]
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

//position based off index.html
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);
$("#mapDiv").append(googleMap);


if (bio.skills.length !== 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		if (work.jobs.hasOwnProperty(job)) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedTitleandEmployer = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedTitleandEmployer);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

work.display();

projects.display = function() {
	for (var item in project.projects) {
		$("#projects").append(HTMLprojectStart);

		if (project.projects.hasOwnProperty(item)) {
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[item].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", project.projects[item].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[item].description);
			$(".project-entry:last").append(formattedDescription);

		}
	}
};

projects.display();

//internationalize the name in the banner
function inName() {
	var name = window.name;
	name = name.split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	name = name[0] + " " + name[1];
	console.log(name);
	return name;
};

var name = $("#name").text();

$("#main").append(internationalizeButton);