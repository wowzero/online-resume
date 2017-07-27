// create my bio object throughout object liberal notation
var bio = {
  "name": "Tim Nash",
  "role": "Web developer",
  "contacts": {
    "mobile": "15560787134",
    "email": "yq.lu@me.com",
    "github": "https://github.com/wowzero",
    "twitter": "abcd",
    "location": "dcba",
    "blog": "12345"
  },
  "welcomeMessage": "Hello World!",
  "skills": [
    "HTML", "CSS", "JavaScript", "Python"
  ],
  "biopic": "images/fry.jpg"
};

// create my education object throughout object liberal notation
var education = {
  "schools": [{
      "name": "TJNU",
      "location": "Tianjin",
      "degree": "bachelor",
      "majors": "Chemistry",
      "dates": "2013",
      "url": "https://www.tjnu.edu.cn/"
    },
    {
      "name": "Gatech",
      "location": "ALT",
      "degree": "master",
      "majors": "CSE",
      "dates": "2017",
      "url": "http://www.gatech.edu/"
    }
  ],
  "onlineCourses": [{
      "title": "Font-End Web Development",
      "school": "Udacity",
      "dates": "2017-5-1",
      "url": "https://classroom.udacity.com/"
    },
    {
      "title": "Data Analyst",
      "school": "Udacity",
      "dates": "2017-5-1",
      "url": "https://classroom.udacity.com/"
    }
  ]
};

// create my work object throughout object liberal notation
var work = {
  "jobs": [{
      "employer": "Nanyuan middle school",
      "title": "teacher",
      "location": "Tianjin",
      "dates": "2014-5-1",
      "description": "It is a job to teach Chemistry for students in this school."
    },
    {
      "employer": "Baidu",
      "title": "Data Analysist",
      "location": "Shanghai",
      "dates": "2016-5-1",
      "description": "It is a job to analyze big data from Baidu research engine."
    }
  ]
};

// create my projects object throughout object liberal notation
var projects = {
  "projects": [{
      "titles": "Mockup to Article",
      "dates": "2017-5-30",
      "description": "Practice HTML syntax by converting a mockup of a blog article into a real website!",
      "images": "images/blog-mockup.jpg"
    },
    {
      "titles": "Animal Trading Cards",
      "dates": "2017-6-1",
      "description": "Use what I've learned about CSS to convert a design prototype into a functional webpage!",
      "images": "images/pika.png"
    },
    {
      "titles": "Building a Portfolio Website",
      "dates": "2017-6-30",
      "description": "I am provided with a design mockup as a PDF-file and have replicated that design in HTML and CSS. I develop a responsive website that will display images, descriptions and links to each of the portfolio projects you complete.",
      "images": "images/building-a-portfolio-website.jpg"
    }
  ]
};

// encapsulate functions through dot notation
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedName);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);
  // $("#header").append(HTMLcontactGeneric);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#header").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#header").append(formattedEmail);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#header").append(formattedTwitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#header").append(formattedGithub);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  $("#header").append(formattedBlog);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#header").append(formattedLocation);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);
  var formattedWelcomMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomMsg);
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    });
  }
};
bio.display();

work.display = function displayWork() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedEmployerTitle).append(formattedLocation).append(formattedDates).append(formattedDescription);
  });
};
work.display();

projects.display = function dispalyProjects() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.titles);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    var formattedImages = HTMLprojectImage.replace("%data%", project.images);
    $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription).append(formattedImages);
  });
};
projects.display();

education.display = function displayEducation() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", school.name);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedName).append(formattedDates).append(formattedMajors).append(formattedDegree);
  });
  $("#education").append(HTMLonlineClasses);
  // education.onlineCourses.forEach(function(online) {
  //   $("#education").append(HTMLschoolStart);
  //   var formattedTitle = HTMLonlineTitle.replace("%data%", online.title);
  //   var formattedSchool = HTMLonlineSchool.replace("%data%", online.school);
  //   var formattedDates = HTMLonlineDates.replace("%data%", online.dates);
  //   var formattedUrl = HTMLonlineURL.replace("%data%", online.url);
  //   $("#.education-entry:last").append(formattedTitle).append(formattedSchool).append(formattedDates).append(formattedUrl);
  // });
  education.onlineCourses.forEach(function(online) {
    var formattedTitle = HTMLonlineTitle.replace("%data%", online.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", online.school);
    var formattedDates = HTMLonlineDates.replace("%data%", online.dates);
    var formattedUrl = HTMLonlineURL.replace("%data%", online.url);
    $("#education").append(formattedTitle).append(formattedSchool).append(formattedDates).append(formattedUrl);
  });
};
education.display();
