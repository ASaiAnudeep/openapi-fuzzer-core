const test = require('uvu').test;
const assert = require('uvu/assert');
const fuzz = require('../src/index');

test('fuzz swagger', () => {
  const data = require('./data/swagger-pet-store-v2.json');
  const requests = fuzz.swagger(data);
  assert.equal(requests, [
    { method: 'get', path: '/v2/pet/{petId}/uploadImage' },
    { method: 'put', path: '/v2/pet/{petId}/uploadImage' },
    { method: 'patch', path: '/v2/pet/{petId}/uploadImage' },
    { method: 'delete', path: '/v2/pet/{petId}/uploadImage' },
    { method: 'get', path: '/v2/pet' },
    { method: 'patch', path: '/v2/pet' },
    { method: 'delete', path: '/v2/pet' },
    { method: 'post', path: '/v2/pet/findByStatus' },
    { method: 'put', path: '/v2/pet/findByStatus' },
    { method: 'patch', path: '/v2/pet/findByStatus' },
    { method: 'delete', path: '/v2/pet/findByStatus' },
    { method: 'post', path: '/v2/pet/findByTags' },
    { method: 'put', path: '/v2/pet/findByTags' },
    { method: 'patch', path: '/v2/pet/findByTags' },
    { method: 'delete', path: '/v2/pet/findByTags' },
    { method: 'put', path: '/v2/pet/{petId}' },
    { method: 'patch', path: '/v2/pet/{petId}' },
    { method: 'get', path: '/v2/store/order' },
    { method: 'put', path: '/v2/store/order' },
    { method: 'patch', path: '/v2/store/order' },
    { method: 'delete', path: '/v2/store/order' },
    { method: 'post', path: '/v2/store/order/{orderId}' },
    { method: 'put', path: '/v2/store/order/{orderId}' },
    { method: 'patch', path: '/v2/store/order/{orderId}' },
    { method: 'post', path: '/v2/store/inventory' },
    { method: 'put', path: '/v2/store/inventory' },
    { method: 'patch', path: '/v2/store/inventory' },
    { method: 'delete', path: '/v2/store/inventory' },
    { method: 'get', path: '/v2/user/createWithArray' },
    { method: 'put', path: '/v2/user/createWithArray' },
    { method: 'patch', path: '/v2/user/createWithArray' },
    { method: 'delete', path: '/v2/user/createWithArray' },
    { method: 'get', path: '/v2/user/createWithList' },
    { method: 'put', path: '/v2/user/createWithList' },
    { method: 'patch', path: '/v2/user/createWithList' },
    { method: 'delete', path: '/v2/user/createWithList' },
    { method: 'post', path: '/v2/user/{username}' },
    { method: 'patch', path: '/v2/user/{username}' },
    { method: 'post', path: '/v2/user/login' },
    { method: 'put', path: '/v2/user/login' },
    { method: 'patch', path: '/v2/user/login' },
    { method: 'delete', path: '/v2/user/login' },
    { method: 'post', path: '/v2/user/logout' },
    { method: 'put', path: '/v2/user/logout' },
    { method: 'patch', path: '/v2/user/logout' },
    { method: 'delete', path: '/v2/user/logout' },
    { method: 'get', path: '/v2/user' },
    { method: 'put', path: '/v2/user' },
    { method: 'patch', path: '/v2/user' },
    { method: 'delete', path: '/v2/user' }
  ]);
});

test.run();