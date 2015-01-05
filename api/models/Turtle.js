/**
* Turtle.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	commonName: 'string',
    forename: 'string',
    gender: 'string',
    records: {
    	collection: 'record',
    	via: 'turtle'
    }
  }
};

