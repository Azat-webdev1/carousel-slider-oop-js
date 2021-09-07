'use strict';

import Validator from '../plugins/validator/validator';

const valid = new Validator({
  selector: '#form1',
  pattern: {
    
  },
  method: {
    'form1-name': [
      ['notEmpty'],
      ['pattern', 'name'],
    ],
    'form1-phone': [
      ['notEmpty'],
      ['pattern', 'phone'],
    ],
    'form1-email': [
      ['notEmpty'],
      ['pattern', 'email'],
    ]
  },
});


const valid2 = new Validator({
  selector: '#form2',
  pattern: {
    
  },
  method: {
    'form2-name': [
      ['notEmpty'],
      ['pattern', 'name'],
    ],
    'form2-message': [
      ['notEmpty'],
      ['pattern', 'message'],
    ],
    'form2-phone': [
      ['notEmpty'],
      ['pattern', 'phone'],
    ],
    'form2-email': [
      ['notEmpty'],
      ['pattern', 'email'],
    ]
  },
});



const valid3 = new Validator({
  selector: '#form3',
  pattern: {
    
  },
  method: {
    'form3-name': [
      ['notEmpty'],
      ['pattern', 'name'],
    ],
    'form3-phone': [
      ['notEmpty'],
      ['pattern', 'phone'],
    ],
    'form3-email': [
      ['notEmpty'],
      ['pattern', 'email'],
    ]
  },
});



export { valid, valid2, valid3 };