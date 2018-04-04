/**
 * Written on April 3, 2019
 * Designed to operate two methods done() and fail() for the callback function
 * Uses the functions given by Professor for the assignment
 * Modified on April 4, 2019
 * Modification: Made done() and fail() method asynchronous
 * @author Rupendra MAHARJAN
 */

function slow(callback) {
    return Math.random() > 0.5 ? callback("Error", null) : callback(null, { id: 12345 });
}

/**
 * Function definition to define done() and fail() operation
 */
function exec(fn) {
    var res = fn((a, b) => [a, b]);
    return {
        done: function (fn) {
            process.nextTick(() => {
                if (res[0] === null) {
                    fn(Object.keys(res[1]) + ":" + res[1].id);
                }
            });
            return this;
        },
        fail: function (fn) {
            process.nextTick(() => {
                if (res[0] === "Error") {
                    fn("Number Greater than 0.5");
                }
            });
        }
    }
}

/**
 * For execution of the code
 */
exec(slow)
    .done(function (data) {
        console.log(data);
    })
    .fail(function (err) {
        console.log("Error: " + err);
    }); 