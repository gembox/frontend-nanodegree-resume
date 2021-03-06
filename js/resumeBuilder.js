/*
This is empty on purpose! Your code to build the resume will go here.
 */

//JSON Objects
//object to hold the bio information
var bio = {
  "name": "Ross Helenius",
  "role": "Web Developer",
  "contact": {
    "mobile": "978-226-8509",
    "email": "rhelenius@gmail.com",
    "github": "gembox",
    "twitter": "rhelenius118",
    "location": ["Boston, MA"]
  },
  "biopic": "https://lh3.googleusercontent.com/-sd8iEO5bxA4/VjS7TK4XNiI/AAAAAAAAAJU/NBqAoL_PRL0/w140-h140-p/MePic.PNGzoom=2&amp;resize=300%2C300",
  "welcomeMessage": "Welcome to my page about me.",
  "skills": ["HTML", "Javascript", "SQL", "Analytics"]
};

//object to hold the work information
var work = {
  "jobs": [{
    "employer": "athenahealth",
    "title": "Data Solutions Manager",
    "location": "Watertown, MA",
    "dates": "2014-Current",
    "description": "Manage custom report requests."
  },
  {
    "employer": "UMass Memorial",
    "title": "Applications/Systems Specialist",
    "location": "Worcester, MA",
    "dates": "2012-2014",
    "description": "Perform custom report and interface work."
  },
  {
    "employer": "Alere",
    "title": "Solutions Analyst",
    "location": "Waltham, MA",
    "dates": "2012",
    "description": "Manage features of the application for the windows platform."
  },
  {
    "employer": "TEK Systems",
    "title": "Implementation Consultant",
    "location": "Nashville, TN",
    "dates": "2011-2012",
    "description": "Consult on the Allscripts EHR rollout."
  },
  {
    "employer": "Lahey Clinic",
    "title": "Systems Analyst III",
    "location": "Burlington, MA",
    "dates": "2009-2011",
    "description": "Perform various functions on the Allscripts EHR rollout."
  }]
};

//object to hold the education information
var education = {
  "schools" : [{
    "name" : "UMass Lowell",
    "dates" : "2010",
    "location" : "Lowell, MA",
    "degree" : "Certificate",
    "major" : "Information Technology",
    "url" : "http://www.uml.edu"
    },
    {
    "name" : "Rollins College",
    "dates" : "2005",
    "location" : "Winter Park, FL",
    "degree" : "BA",
    "major" : "Psychology",
    "url" : "http://www.rollins.edu"
    }],
  "onlineCourses" : [{
    "title" : "UNIX",
    "school" : "UML",
    "date" : "2009",
    "url" : "http://www.uml.edu"
    },
    {
    "title" : "C Programming",
    "school" : "UML",
    "date" : "2009",
    "url" : "http://www.uml.edu"
  }]
};

//object to hold the project information
var projects = {
  "projects" : [{
    "title" : "Test Title",
    "dates" : "2015",
    "description" : "Some text here.",
    "images" : ["http://placehold.it/100x100"]
    },
    {
    "title" : "Test Title2",
    "dates" : "2015",
    "description" : "Some text here.2",
    "images" : ["http://placehold.it/100x100"]
    }]
};

//add the bio section to the top of the page and contacts to the footer
bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName =HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPicture);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);

  var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);

  $("#header").append(HTMLskillsStart);

  for (var skill in bio.skills) {
    if (bio.skills.hasOwnProperty(skill)) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
  }
};

bio.display();

//show the work seciton of the resume
work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    if (work.jobs.hasOwnProperty(job)) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedTitleandEmployer = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedTitleandEmployer);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

work.display();

//show the project section of the resume
projects.display = function() {
  for (var item in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    if (projects.projects.hasOwnProperty(item)) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
      $(".project-entry:last").append(formattedDescription);

      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

projects.display();

//show the education section of the resume
education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);

    if (education.schools.hasOwnProperty(school)) {
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedName);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);

      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);
    }
  };

  $("#education").append(HTMLonlineClasses);

  for (var course in education.onlineCourses) {
    $("#education").append(HTMLonlineStart);

    if (education.onlineCourses.hasOwnProperty(course)) {

      var formattedClass = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".online-entry:last").append(formattedClass + formattedSchool);

      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      $(".online-entry:last").append(formattedDate);

      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".online-entry:last").append(formattedURL);
    }
  };
};

education.display();

//add in the google map
$("#mapDiv").append(googleMap);

//internationalize the name in the banner - not needed in final version
// function inName() {
//  var name = window.name;
//  name = name.split(" ");
//  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//  name[1] = name[1].toUpperCase();
//  name = name[0] + " " + name[1];
//  console.log(name);
//  return name;
// };

// var name = $("#name").text();

// $("#main").append(internationalizeButton);