// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning ${subject}.`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubject(){
        console.log(`My favorite subjects are ${this.favSubjects}.`);
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(ProjectManagerAttributes){
        super(ProjectManagerAttributes);
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${name} debugs ${student.name}'s code on ${student}.`);
    }
}

const personOne = new Person({
    name: 'Nina',
    age: 19,
    location: 'Miami'
});

const personTwo = new Person({
    name: 'Franky',
    age: 23,
    location: 'Chicago'
});

const personThree = new Person({
    name: 'Julie',
    age: 21,
    location: 'New York'
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const taylor = new Instructor({
      name: 'Taylor',
      location: 'Utah',
      age: 32,
      favLanguage: 'C++',
      specialty: 'Front-end',
      catchPhrase: 'Get Rich'
  });

  const nathan = new Instructor({
      name: 'Nathan',
      location: 'Naperville',
      age: 27,
      favLanguage: 'Java',
      specialty: 'Back-end',
      catchPhrase: 'Coding is fun.'
  });

  const trisha = new Student({
      name: 'Trisha',
      location: 'California',
      age: 30,
      previousBackground: 'vlogger',
      className: 'Web22',
      favSubjects: 'JavaScript'
  });

  const jeffree = new Student({
    name: 'Jeffree',
    location: 'Seattle',
    age: 34,
    previousBackground: 'sales',
    className: 'Web22',
    favSubjects: 'HTML/CSS'
}); 

const tana = new Student({
    name: 'Tana',
    location: 'Texas',
    age: 21,
    previousBackground: 'retail',
    className: 'Web22',
    favSubjects: 'Partying'
});

const paul = new ProjectManager({
    name: 'Paul',
    location: 'Las Vegas',
    age: 28,
    favLanguage: 'C#', 
    specialty: 'Front-end',
    catchPhrase: 'Take breaks',
    gradClassName:'Web16',
    favInstructor: 'Britt'
});

const elise = new ProjectManager({
    name: 'Elise',
    location: 'Chicago',
    age: 36,
    favLanguage: 'Python', 
    specialty: 'Front-end',
    catchPhrase: 'Push through',
    gradClassName: 'Web16',
    favInstructor: 'Dan'
});

const john = new ProjectManager({
    name: 'John',
    location: 'The Wall',
    age: 23,
    favLanguage: 'JavaScript', 
    specialty: 'Back-end',
    catchPhrase: 'I know nothing',
    gradClassName: 'Web16',
    favInstructor: 'Liz'
});


