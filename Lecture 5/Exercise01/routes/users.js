/** Exported in-built modules */
var express = require('express');
var router = express.Router({
  caseSensitive: true,
  strict: true
});
const fetch = require('node-fetch');
const Rx = require('rxjs/Rx');
const http = require('http');
/**
 * Written on April 7, 2018
 * @param {*} url refers to the URL defined by the user 
 * @param {*} res refers to the response to be sent by the server
 * Loads the data from given url in JSON format and fill the table of users.ejs template
 * using Promise technology
 * using Reactive Server
 * using Async and Await
 * @author Rupendra MAHARJAN
 */

/** Start of Promise Technology */
function myPromise(url, res) {
  fetch(url)
    .then((datum) => datum.json())
    .then((datum) => {
      res.render('users', { 'datum': datum });
    });
}

router.get('/promises', function (req, res, next) {
  myPromise('http://jsonplaceholder.typicode.com/users/', res);
});
/** End of Promise method */

/**Start of Reactive Programming */

function myObservable(url, res) {
  let promised = fetch(url).then((datum) => datum.json());
  Rx.Observable.fromPromise(promised)
    .subscribe((datum) => {
      res.render('users', { 'datum': datum })
    });

  // var myObserver = new Rx.Subject();
  // fetch(url).then((datum) => myObserver.next(datum.json()));
  // myObserver.subscribe((datum) => {
  //   console.log(datum);
  //   res.render('users',{'datum': datum});
  // });
}

router.get('/observables', function (req, res, next) {
  myObservable('http://jsonplaceholder.typicode.com/users/', res);
});

/**End of Reactive Programming */

/**Start of Async and Await */

router.get('/asyncAwait', function (req, res, next) {
  myAsyncAwait('http://jsonplaceholder.typicode.com/users/', res);
});

async function myAsyncAwait(url, res) {
  try {
    await myPromise(url, res);
  } catch (error) {
    console.log(error);
  }
}

module.exports = router;
