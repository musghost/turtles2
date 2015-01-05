/**
* Turtle.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	
  	weight: {
  		type: 'float'
  	},
    shell: 'float',
  	plastron: 'float',
  	status: 'string',
  	scientificName: 'string',
  	turtle: {
  		model: 'turtle'
  	}
  }
};

