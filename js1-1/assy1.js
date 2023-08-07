const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30,
    },
    Asab: {
      email: "asab@asab.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 25,
      isLoggedIn: false,
      points: 50,
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50,
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50,
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
    Paul: {
      email: "paul@paul.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
      ],
      age: 20,
      isLoggedIn: false,
      points: 40,
    },
  };
/// task-1 =>Done
console.log("-----11111111--------------------------------")
let users_of_max_skiles="";
function most_skills (){
    let max=0;
    for(let key  in   users){
   if( users[key].skills.length>max)
{
  max=users[key].skills.length;
 
} users_of_max_skiles=key;

    }
}
most_skills();
console.log(" person with the most skills in the users object:     ",users_of_max_skiles)

console.log("--------222222222-----------------------------")
/// task-2 =>done 

function loggedinusersandgreat (){
  let count_login=0;
  let count_great_50=0;
  for(let key in users){
    const { isLoggedIn, points } = users[key];
    if(isLoggedIn)
    count_login++;
    if(points>=50)
      count_great_50++;
      

    }
    console.log("the number of users is logged= " ,count_login)
    console.log("the number of users points greater than or equal to 50 = " ,count_great_50)

    
  }loggedinusersandgreat();
  console.log("-----------3333333333--------------------------")


  /// task-3 =>done

function findMERNStackDevelopers(users) {
  const mernStackDevelopers = [];

  for (let user in users) {
    const skills = users[user].skills;
    if (
      skills.includes("MongoDB") &&
      skills.includes("Express") &&
      skills.includes("React") &&
      skills.includes("Node")
    ) {
      mernStackDevelopers.push(user);
    }
  }

  return mernStackDevelopers;
}

const mernStackDevelopers = findMERNStackDevelopers(users);
console.log("MERN stack developers:", mernStackDevelopers)

console.log("-------------4444444444------------------------")

/// task-4 =>done
function MERN_stack_developers(user){
  const MERN= ["MongoDB", "Express", "React", "Node"];
  return MERN.every((skill) => user.skills.includes(skill));
}
let mern_Stack_Developers = Object.keys(users).filter((user) =>
MERN_stack_developers(users[user])
);

console.log("MERN Stack Developers are :", mern_Stack_Developers );
console.log("--------5555555555-----------------------------")

/// task-5 =>done 

const myname="Roa";
users[myname]={
  email:"roa@gmail.com",
  skills:["html","css","js"],
  age: 20,
      isLoggedIn: false,
      points: 40,
}
console.log("updated users object with my name added ",users)
console.log("-----666666--------------------------------")
/// task-6 =>done

const keys = Object.keys(users);
console.log("Keys/Properties of the users object:", keys);
/// task-7 =>done 
console.log("--777777-----------------------------------")
const values=Object.values(users);
console.log("values of the users object" , values)