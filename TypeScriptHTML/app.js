///// <reference path="typings/jquery/jquery.d.ts" />
//import jobs = Jobs;   //import namespaces
//import persons = Persons;
var stringType;
var boolType;
var arrStringType;
var numberType;
var anyType;
var enumWorkState;
var WorkState;
(function (WorkState) {
    WorkState[WorkState["Work"] = 2] = "Work";
    WorkState[WorkState["Vacation"] = 5] = "Vacation";
    WorkState[WorkState["Sick"] = 8] = "Sick";
})(WorkState || (WorkState = {}));
//=====================================================================
console.log('----------Basic Types----------');
var diffTypes;
//types of parameters
function setTypedFunction(stringType, boolType, arrStringType, numberType, anyType, state) {
    console.log('setTypedFunction: ');
    console.log('stringType: ' + stringType);
    console.log('boolType: ' + boolType);
    console.log('arrStringType: ' + arrStringType);
    console.log('numberType: ' + numberType);
    console.log('anyType: ' + anyType);
    console.log('state: ' + state);
}
setTypedFunction('ivan', true, ['Ivan', 'petkov'], 10, function () { return 5; }, WorkState.Vacation);
//=====================================================================
console.log('---------------------------------------');
console.log('----------Pointer of function----------');
//pointer of function
var someFunc;
var someFunc2;
//implementation of function
someFunc = function (x, y) {
    return (x + y).toString();
};
console.log('someFunc: ' + someFunc(5, 8));
//another implementation of function
someFunc = function (x, y) { return (x + y).toString(); };
console.log('someFunc lambda implementation: ' + someFunc(5, 8));
function Sum(x, y, z /*defaul value*/) {
    if (z === void 0) { z = 100; }
    return {
        sum: x + y + z
    };
}
console.log('Func return anonymous object: ' + Sum(5, 8).sum);
//get unknown count of parameters
function SumMultiParameters(x) {
    var restNumber = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restNumber[_i - 1] = arguments[_i];
    }
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
var someGenericListOfNumbers = new Collections.List();
someGenericListOfNumbers.add(10);
someGenericListOfNumbers.add(20);
someGenericListOfNumbers.add(30);
console.log('someGenericListOfNumbers.count: ' + someGenericListOfNumbers.count);
var someGenericListOfString = new Collections.List();
someGenericListOfString.add('asbv');
someGenericListOfString.add('asbvas');
console.log('someGenericListOfString.count: ' + someGenericListOfString.count);
var someGenericListOfWorkers = new Collections.ListWorkers();
someGenericListOfWorkers.add(new Persons.Worker('Ivan', 'Petkov', Sex.Male, 32, { experince: 8, email: 'ivan@epam.com' }));
console.log('someGenericListOfWorkers.count: ' + someGenericListOfWorkers.count);
//=====================================================================
console.log('---------------------------------------');
console.log('-----------------Indexer(Dictionary)-----------------');
var collection = {};
collection['First'] = new Jobs.JobResponsibility('Able to read and understand project and requirement documentation; able to create documentation describing his/her code.', 'Plays the Developer role.');
collection['Second'] = new Jobs.JobResponsibility('Shows good understanding of project documentation. Provides good-quality functional requirement and specification review and analysis. Creates high-quality test cases and test results reports. Creates test plans.', 'Plays the Tester (or Automation Tester) and Key Tester roles.');
console.log(collection['Second']);
//=====================================================================
console.log('---------------------------------------');
console.log('------------------OOP------------------');
var somePerson = new Persons.Person('Ivan', 'Petkov', Sex.Male, 32);
console.log('Call introduce() method from Person class: ' + somePerson.introduce());
var someWorker = new Persons.Worker('Ivan', 'Petkov', Sex.Male, 32, { experince: 8, email: 'ivan@epam.com' });
console.log('Call introduce() method from Worker class: ' + someWorker.introduce());
//type casting
var person;
person = someWorker;
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
//class and property  decorators
var someClient = new Persons.Client('Client', 'Testov', Sex.Male, 23, 'test@test.com');
//someClient.introduce();
var user;
user = someClient;
user.introduce();
user = someWorker;
//method decorator
user.introduce();
// with parameter decorator
someClient.updateMail("new@test.com");
console.log('-----------------static methods----------------');
Persons.Person.introduceStatic();
Persons.Worker.introduceStatic();
console.log('---------------------------------------');
console.log('-----------------jQuery----------------');
//=====================================================================
$(document).ready(function () {
    $('#title')[0].innerHTML = 'TypeScript fundamentals';
});
//# sourceMappingURL=app.js.map