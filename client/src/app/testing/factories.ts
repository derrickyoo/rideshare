import * as faker from 'faker';

import { IToken, IUser, createUser } from '../services/auth.service';

export const createFakeUser = (data?: any): IUser => {
  return createUser(Object.assign({
    id: faker.random.uuid(),
    username: faker.internet.userName(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
  }, data));
};

export const createFakeToken = (data?: any): IToken => {
  const header = faker.random.alphaNumeric(36);
  const payload = window.btoa(JSON.stringify(data));
  const signature = faker.random.alphaNumeric(43);
  return {
    access: `${header}.${payload}.${signature}`,
    refresh: faker.random.alphaNumeric(100)
  };
};
