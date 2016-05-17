﻿//import jobs = Jobs;   //import namespaces
//import persons = Persons;

var stringType: string;
var boolType: boolean;
var arrStringType: string[];
var numberType: number;
var anyType: any;
var enumWorkState: WorkState;

enum WorkState {
    Work = 2,
    Vacation = 5,
    Sick = 8
}

//=====================================================================
console.log('----------Basic Types----------');

var diffTypes;
//types of parameters
function setTypedFunction(stringType: string, boolType: boolean, arrStringType: string[],
    numberType: number, anyType: any, state: WorkState) {
    console.log('setTypedFunction: ');
    console.log('stringType: ' + stringType);
    console.log('boolType: ' + boolType);
    console.log('arrStringType: ' + arrStringType);
    console.log('numberType: ' + numberType);
    console.log('anyType: ' + anyType);
    console.log('state: ' + state);
}
setTypedFunction('ivan', true, ['Ivan', 'petkov'], 10, () => 5, WorkState.Vacation);

//=====================================================================
console.log('---------------------------------------');
console.log('----------Pointer of function----------');

//pointer of function
var someFunc: (x: number, y: number) => string;
var someFunc2: (x: number, y: number) => string;

//implementation of function
someFunc = function (x: number, y: number) {
    return (x + y).toString();
}
console.log('someFunc: ' + someFunc(5, 8));

//another implementation of function
someFunc = (x, y) => (x + y).toString();
console.log('someFunc lambda implementation: ' + someFunc(5, 8));

function Sum(x: number, y: number, z: number = 100 /*defaul value*/): { sum: number; }/*return anonymous object*/ {
    return{
        sum: x + y + z
    };
}
console.log('Func return anonymous object: ' + Sum(5, 8).sum);

//get unknown count of parameters
function SumMultiParameters(x: number, ...restNumber: number[]): number {
    var sum = x;
    var i = 0;
    for (i; i < restNumber.length; i++) {
        sum += restNumber[i];
    }
    return sum;
}
console.log('Func get unknown count of parameters: ' + SumMultiParameters(5, 8, 6, 7, 5, 9));

////=====================================================================
console.log('---------------------------------------');
console.log('----------------Overload---------------');

function printMessage(msg: string): void;
function printMessage(msg: number): void;

function printMessage(msg: number | string): void; /*union parameters */


function printMessage(msg) { 
    if (typeof msg == 'string')
        console.log("string " + msg);
    if (typeof msg == 'number')
        console.log("number " + msg.toString());
}
printMessage('Message from printMessage function!');
printMessage(5);
printMessage("5");

//=====================================================================
console.log('---------------------------------------');
console.log('----------------Generic----------------');
var someGenericListOfNumbers = new Collections.List<number>();
someGenericListOfNumbers.add(10);
someGenericListOfNumbers.add(20);
someGenericListOfNumbers.add(30);
console.log('someGenericListOfNumbers.count: ' + someGenericListOfNumbers.count);

var someGenericListOfString = new Collections.List<string>();
someGenericListOfString.add('asbv');
someGenericListOfString.add('asbvas');
console.log('someGenericListOfString.count: ' + someGenericListOfString.count);

var someGenericListOfWorkers = new Collections.ListWorkers<Persons.Worker>();
someGenericListOfWorkers.add(new Persons.Worker('Ivan', 'Petkov', Gender.Male, 32, { experince: 8, email: 'ivan@epam.com' }));
console.log('someGenericListOfWorkers.count: ' + someGenericListOfWorkers.count);

//=====================================================================
console.log('---------------------------------------');
console.log('-----------------Indexer(Dictionary)-----------------');
var collection: ICollection = {};
collection['First'] = new Jobs.JobResponsibility('Able to read and understand project and requirement documentation; able to create documentation describing his/her code.', 'Plays the Developer role.');
collection['Second'] = new Jobs.JobResponsibility('Shows good understanding of project documentation. Provides good-quality functional requirement and specification review and analysis. Creates high-quality test cases and test results reports. Creates test plans.', 'Plays the Tester (or Automation Tester) and Key Tester roles.');
console.log(collection['Second']);

//=====================================================================
console.log('---------------------------------------');
console.log('------------------OOP------------------');
var somePerson = new Persons.Person('Ivan', 'Petkov', Gender.Male, 32);
console.log('Call introduce() method from Person class: ' + somePerson.introduce());

var someWorker = new Persons.Worker('Ivan', 'Petkov', Gender.Male, 32, { experince: 8, email: 'ivan@epam.com' });
console.log('Call introduce() method from Worker class: ' + someWorker.introduce());

//type casting
var person: Persons.Person;
person = <Persons.Person>someWorker;
console.log('Call introduce() method from Worker parent class: ' + person.introduce());

var devJob = new Jobs.Job('SOFTWARE ENGINEER', 'Level 2');
devJob.addJobResponsibility(new Jobs.JobResponsibility('Able to read and understand project and requirement documentation; able to create documentation describing his/her code.', 'Plays the Developer role.'));
var qaJob = new Jobs.Job('SOFTWARE TESTING ENGINEER', 'Level 3');
qaJob.addJobResponsibility(new Jobs.JobResponsibility('Shows good understanding of project documentation. Provides good-quality functional requirement and specification review and analysis. Creates high-quality test cases and test results reports. Creates test plans.', 'Plays the Tester (or Automation Tester) and Key Tester roles.'));

someWorker.addJob(devJob);
someWorker.addJob(qaJob);

console.log('Display all Jobs with Responsibilities');
var msg = someWorker.displayJobResponsibility();
console.log(msg);

console.log('-----------------Clients----------------');
console.log('------------logging with decorators-----');

var person = new Persons.Person('Client', 'Testov', Gender.Male, 23);


//dependency injection
var injector = new Persons.Injector();
injector.mapValue('person', person);
injector.mapValue('email', 'injected@test.com');
var someClient = injector.instantiate(Persons.Client);

//var someClient = new Persons.Client(person, 'test@test.com');

//class and property  decorator
//var someClient = new Persons.Client('test@test.com');
someClient.introduce();

var user: Persons.Client | Persons.Worker;
user = someClient;
user.introduce();

user = someWorker;
//method decorator
user.introduce();

// with parameter decorator
someClient.updateMail("new@test.com");
someClient.introduce();

console.log('-----------------static methods----------------');

Persons.Person.introduceStatic();
Persons.Worker.introduceStatic();

console.log('-----------------decorator pattern------------');

var decoratedClient = new Persons.ClientDecorator("decorated@client.com", someClient);
decoratedClient.introduce();

console.log('---------------------------------------');

console.log('-----------------jQuery----------------');
//=====================================================================
$(document).ready(function () {
    $('#title')[0].innerHTML = 'TypeScript fundamentals';
});
