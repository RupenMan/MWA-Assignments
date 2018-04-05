/**
 * Written on April 4, 2018
 * Resolves the IP Address of a given domain name and displays them
 * @author Rupendra MAHARJAN
 */
const dns = require('dns');
dns.resolve4("www.youtube.com",(error, addresses) => 
    addresses.forEach(address => console.log(address))
);