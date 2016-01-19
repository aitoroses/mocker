import { noop, faker, value, incremental, computed, hasMany } from '../..'
import OU from './Helper/OU'

let w = value('weblogic')


export default class UserUm {

  static virtuals = [
    "_firstName",
    "_lastName",
    "_uid"
  ];

  _firstName = faker('name.firstName');
  _lastName = faker('name.lastName');
  _uid = computed(function() {return `${this._lastName.slice(0,5).toLowerCase()}${this._firstName.slice(0,2).toLowerCase()}`});

  _LDAP = {
    firstName: computed(function() {return this._firstName}),
    lastName: computed(function() {return this._lastName}),
    uid: computed(function() {return this._uid}),
    displayName: computed(function() {return `${this._firstName} ${this._lastName}`}),
    mail: computed(function() {return `${this._firstName.toLowerCase()}.${this._lastName.toLowerCase()}@novartis.com`}),
    telephone: faker('phone.phoneNumber')
  };

  _OUS = hasMany(OU, {max: 3});

  crTime = faker('date.past');
  createdBy = w;
  id = computed(function() {return this._uid});
  lmTime = faker('date.past');
  updatedBy = w;
}
