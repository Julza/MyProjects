var bio = {
  "firstNames": "Julia Ramaila",
  "role" : "FrontEnd developer Intern",
  "contacts":
    {
      "mobile":"072-566-7782",
      "email":"ramailajulia@gmail.com",
      "github":"Julza",
      "twitter":"@juliaramaila",
      "location":"Cape Town, South Africa"
    },
  "message":"This is all about me! Ramaila MJ Resume",
  "skills" :
      [
        "C#","JS","SQL","Html/Css","C++","VB","Microsoft Office Tools"
      ],
  "picture":"images/mypic.jpg"
  }

//******************************************************************************

  var work = {
    "jobs": [
      {
        "employer": "Skywalk Innovations",
        "title": "FrontEnd Developer Intern",
        "location": "CPUT, Cape Town",
        "dates": "May 2015 - Current",
        "description": "Designing Websites using various programming languages"
      },
      {
        "employer": "Capacity",
        "title": "C# Programming Learnership",
        "location": "Belville, Cape Town",
        "dates": "June 2014 - Feb 2015",
        "description": "Software development and Web development"
      },
      {
        "employer": "Limpopo Legislature",
        "title": "IT Support Technician Intern",
        "location": "Lebowakgomo, Limpopo",
        "dates": "Jul 2012 - Jun 2013",
        "description": "Troubleshooting hardware and software"
      },
      {
        "employer": "Department of Education",
        "title": "IT Support Technician",
        "location": "Lebowakgomo, Limpopo",
        "dates": "Jan 2011 - Jun 2012",
        "description": "Troubleshooting hardware and software"
      }
    ]
  }

//******************************************************************************

  var projects = {
    "projects": [
      {
        "title": "SAJ Bus Booking System Project",
        "dates": "Feb 2015",
        "description": "SAJ Bus Booking is developed for customer to book their tickets online and view status of the buses, mostly is all  designed for Hostess to allocate the   passengers in  the bus using desktop application, mobile app and web application.",
        "images":["images/SAJ.png"]
      },
      {
        "title": "Online Electronics Project",
        "dates": "Sep 2014",
        "description": "Online Electronics is a project that register customer to buy various laptops online with a reasonable price.",
        "images":["images/image.jpg","images/laptops.jpg","images/laptop.jpg"]
      },
      {"title": "Online Blood Donation Project",
      "dates": "Nov 2014",
      "description": "the main impact of developing this project it was for good volunteered people to donates blood to patience whose who are in need of blood donations.",
      "images":["images/donate.jpg","images/images(1).jpg"]
    }
    ]
  }

//******************************************************************************
  var education =
  {
    "schools": [
      {
        "schoolName":"TUT",
        "schoolcity":"Pretoria, SA",
        "degree":"NDIP",
        "majors":[
         "Information Systems"," Support Services"
         ],
        "dates":2012,
        "Url":"http://www.tut.co.za"
      },
      {
        "schoolName":"Ngwanamala Senior Secondary",
        "schoolcity":"Polokwane, SA",
        "degree":" Grade 12 Senior Certificate",
        "majors":
        [
          "Mathematics"," Physical Science"
        ],
        "dates":2004,
        "Url":"http://www.ngwanamalasen.co.za"
      },
      {
        "schoolName":"Microsoft",
        "schoolcity":"Cape Town, SA",
        "degree":" MTA Certificates",
        "majors":
        [
          "Software Development Fundemental, Web Development Fundemental"
        ],
        "dates":2015,
        "Url":"http://www.microsoft/pearsonvue.com"
      }
    ],
       "onlineCourses":[
         {
           "title": "Java Script Course",
           "school": "Udacity",
           "dates": "2015",
           "Url": "http://www.udacity.com"
         }
    ]
  }

  //******************************************************************************
  bio.display = function(){

  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.firstNames);
  $("#header").prepend(formattedName);

  var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);

  var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);

  var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);

  var formattedGitHub=HTMLgithub.replace("%data%",bio.contacts.github);
  $("#topContacts").append(formattedGitHub);
  $("#footerContacts").append(formattedGitHub);

  var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);

  var formattedBioPic=HTMLbioPic.replace("%data%",bio.picture);
  $("#header").append(formattedBioPic);
  var formattedMessage=HTMLwelcomeMsg.replace("%data%",bio.message);
  $("#header").append(formattedMessage);

  if(bio.skills.length > 0)
  {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%",bio.skills[6]);
    $("#skills").append(formattedSkill);

  }
}
bio.display();

//*****************************************************************************

work.display = function(){
for(job in work.jobs){

  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);

  var formattedEmployerTitle=formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedLocation= HTMLworkLocation.replace("%data%",work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

  var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription= HTMLworkDescription.replace("%data%",work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

}
}
work.display();

//******************************************************************************

projects.display = function(){
  for(project in projects.projects)
  {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle= HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription= HTMLprojectDescription.replace("%data%",
        projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

if(projects.projects[project].images.length > 0)
{
  for (image in projects.projects[project].images)
  {
    var formattedImage= HTMLprojectImage.replace("%data%",
        projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedImage);
  };
}
  }
}
projects.display();

//*****************************************************************************

education.display = function(){
for(educations in education.schools)
{
$("#education").append(HTMLschoolStart);

 var formattedSchoolName = HTMLschoolName.replace("%data%",
      education.schools[educations].schoolName);

 var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
     education.schools[educations].degree);

 var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
$(".education-entry:last").append(formattedSchoolNameDegree);

 var formattedSchoolDates = HTMLschoolDates.replace("%data%",
     education.schools[educations].dates);
$(".education-entry:last").append(formattedSchoolDates);

 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
     education.schools[educations].schoolcity);
$(".education-entry:last").append(formattedSchoolLocation);

 var formattedSchoolmajor = HTMLschoolMajor.replace("%data%",
     education.schools[educations].majors);
$(".education-entry:last").append(formattedSchoolmajor);

var formattedSchoolUrl = HTMLschoolUrl.replace("%data%",
    education.schools[educations].Url);
$(".education-entry:last").append(formattedSchoolUrl);

}

for(educations in education.onlineCourses)
{
$(".education-entry:last").append(HTMLonlineClasses);
var formattedOnlineTitle= HTMLonlineTitle.replace("%data%",
    education.onlineCourses[educations].title);

var formattedOnlineSchool= HTMLonlineSchool.replace("%data%",
        education.onlineCourses[educations].school);

var formattedOnlineTitleSchool= formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleSchool);

var formattedOnlineDates= HTMLonlineDates.replace("%data%",
        education.onlineCourses[educations].dates);
        $(".education-entry:last").append(formattedOnlineDates);

var formattedOnlineURL= HTMLonlineURL.replace("%data%",
        education.onlineCourses[educations].Url);
        $(".education-entry:last").append(formattedOnlineURL);
}
}
education.display();

//******************************************************************************

$("#mapDiv").append(googleMap);
$("main").append(internationalizeButton);

//******************************************************************************

  function locationizer(work_obj){
    var locationArray=[];
    for(job in work_obj.jobs){
      var newLocation=work_obj.jobs[job].location;
      locationArray.push(newLocation);
    }
    return locationArray;
  };
  console.log(locationizer(work));
