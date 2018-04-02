/**
 * Written on April 2, 2019
 * Sorts the arrays of objects based on property 'course'
 * @author Rupendra Maharjan
 */

(function () {
    var library = [
        { prof: 'Asaad Saad', course: 'WAP', courseID: 'CS452' },
        { prof: 'Rakesh Shrestha', course: 'WAA', courseID: 'CS545' },
        { prof: 'Steve Nolle', course: 'SWE', courseID: 'CS425' }
    ];

    library.sort(compare);
    library.forEach(unitProf => console.log(unitProf));

    /**
     * User defined comparator to compare two objects of an array
     * @param {*} a refers to element of an array 'library'
     * @param {*} b refers to element of an array 'library'
     */
    function compare(a, b) {
        if (a.course > b.course) {
            return 1;
        }
        else if (a.course < b.course) {
            return -1;
        }
        else {
            return 0;
        }
    }

}());
