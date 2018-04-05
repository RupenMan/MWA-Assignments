/**
 * Written on April 4, 2018
 * A simple clock module
 * @author Rupendra MAHARJAN
 */
class Clock{
    constructor(){
    }
    tick(){
        setInterval(function(){console.log('woohoo')},1000);
    }
}
module.exports = Clock;