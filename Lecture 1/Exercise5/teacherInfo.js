/**
 * Written on April 2, 2019
 * Creates a function constructor called Person and a method called teach()
 * @author Rupendra MAHARJAN
 */
(function () {
    function Person(name) {
        this.name = name;
    }

    var TeacherA = new Person("Asaad");
    var TeacherB = new Person("Tina");
    Person.prototype.teach = function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
    TeacherA.teach("WAP");
    TeacherB.teach("MWA");

}());
