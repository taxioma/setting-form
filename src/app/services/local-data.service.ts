import {InMemoryDbService} from 'angular-in-memory-web-api';

export class LocalDataService implements InMemoryDbService {
  createDb() {
    const mx = 16;
    const mn = 12;
    const rand = Math.floor(Math.random() * (mx - mn + 1)) + mn;
    const settings = [
      {id: 1, fieldName: 'Flora', fieldValue: 'Rose', fieldType: 'string'},
      {id: 2, fieldName: 'Age', fieldValue: '2', fieldType: 'number'},
      {id: 3, fieldName: 'Today date', fieldValue: `${new Date(2018, 4, rand)}`, fieldType: 'Date'},
    ];

    const servers = [
      {
        id: 1,
        fieldDate: `${new Date(2018, 5, rand)}`,
        fieldHost: '192.168.32.30', fieldEvent: 'Active', fieldComent: 'Its OK', fieldResult: 'true'
      },
      {
        id: 2,
        fieldDate: `${new Date(2018, 5, rand + 1)}`,
        fieldHost: '192.168.30.47', fieldEvent: 'Bug', fieldComent: 'Smth wrong', fieldResult: 'false'
      },
    ];

    const users = [
      {id: 1, login: 'admin', password: 'admin'}
    ];

    return {settings, servers, users};

  }


}
