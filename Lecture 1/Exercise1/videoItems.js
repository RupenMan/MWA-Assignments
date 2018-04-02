/**
 * Written on April 2, 2019
 * 52. Exercise
 * Uses the page design as given per assignment question
 * @author Rupendra Maharjan
 */
$(document).ready(function () {
    (function () {
        /**
         * Selects the items in the list and convert them into an array 
         */
        const items = Array.from($('[data-time]'));
        /**
         * textContent or innerText is used to read the text within the list
         * includes() method is similar to contains in Java
         * Filters the element that contains word ECMA6
         */
        console.log("************************");
        console.log("Elements with word ECMA6");
        console.log("************************");
        items
            .filter(item => item.textContent.includes("ECMA6") || item.innerText.includes("ECMA6"))
            .forEach(item => console.log(item));

        /**
        * Map down to a list of time
        */
        console.log();
        console.log("***************************************");
        console.log("Elements with word ECMA6 mapped to time");
        console.log("***************************************");
        items
            .filter(item => item.textContent.includes("ECMA6") || item.innerText.includes("ECMA6"))
            .map(item => $(item).attr('data-time'))
            .forEach(item => console.log(item));

        /**
         * Mapped the list to a second only 
         */
        console.log();
        console.log("***************************************");
        console.log("Elements with word ECMA6 mapped to second");
        console.log("***************************************");
        items
            .filter(item => item.textContent.includes("ECMA6") || item.innerText.includes("ECMA6"))
            .map(item => $(item).attr('data-time').split(":")[1])
            .forEach(item => console.log(item));

        console.log();
        console.log("***************************************");
        console.log("Total Time in Seconds for items with ECMA6");
        console.log("***************************************");
        console.log(items
            .filter(item => item.textContent.includes("ECMA6") || item.innerText.includes("ECMA6"))
            .map(item => $(item).attr("data-time").split(":")[1])
            .reduce((totalTime, unitTime) => totalTime + parseInt(unitTime), 0));
    }());


});
