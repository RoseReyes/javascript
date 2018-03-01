
var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan',count: 13},
        {first_name : 'John', last_name : 'Rosales', count: 11},
        {first_name : 'Mark', last_name : 'Guillen', count: 11},
        {first_name : 'KB', last_name : 'Tonel', count:7}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi', count: 11},
        {first_name : 'Martin', last_name : 'Puryear', count: 13}
     ]
    }

function printThemAll() {

    console.log("Students");
    for(var idx=0; idx < users.Students.length; idx++) {

            console.log(idx+1 + "-" + users.Students[idx].first_name + " " + users.Students[idx].last_name + "-" + users.Students[idx].count); 
    }
    
    console.log("Instructors");    
    for(var idx=0; idx < users.Instructors.length; idx++)  {

             console.log(idx+1 + "-" + users.Instructors[idx].first_name + " " + users.Instructors[idx].last_name + "-" + users.Instructors[idx].count);
    }
    
}
printThemAll();
