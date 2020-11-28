const test = require('uvu').test;
const assert = require('uvu/assert');
const fuzz = require('../src/index');
const Swagger = require('../src/swagger');

test('swagger - fuzz', () => {
  const data = require('./data/swagger-pet-store-v2.json');
  const specs = fuzz.swagger(data);
  assert.equal(specs.length, 383);
});

test('swagger - fuzzPaths', () => {
  const data = require('./data/swagger-pet-store-v2.json');
  const swagger = new Swagger(data);
  swagger.fuzzPaths();
  assert.equal(swagger.specs, [
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/ROOT/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "post",
        "path": "/ROOT/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "put",
        "path": "/ROOT/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "patch",
        "path": "/ROOT/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "delete",
        "path": "/ROOT/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "post",
        "path": "/v2/pet/{petId}/uploadImage/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "post",
        "path": "/v2/pet/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "put",
        "path": "/v2/pet/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/v2/pet/findByStatus/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/v2/pet/findByTags/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/v2/pet/{petId}/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "post",
        "path": "/v2/pet/{petId}/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "delete",
        "path": "/v2/pet/{petId}/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "post",
        "path": "/v2/store/order/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/v2/store/order/{orderId}/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "delete",
        "path": "/v2/store/order/{orderId}/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/v2/store/inventory/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "post",
        "path": "/v2/user/createWithArray/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "post",
        "path": "/v2/user/createWithList/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/v2/user/{username}/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "put",
        "path": "/v2/user/{username}/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "delete",
        "path": "/v2/user/{username}/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/v2/user/login/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "get",
        "path": "/v2/user/logout/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    },
    {
      "name": "PATH",
      "request": {
        "method": "post",
        "path": "/v2/user/INVALID/PATH"
      },
      "expect": {
        "status": [
          404
        ]
      }
    }
  ]);
});

test('swagger - fuzzMethods', () => {
  const data = require('./data/swagger-pet-store-v2.json');
  const swagger = new Swagger(data);
  swagger.fuzzMethods();
  assert.equal(swagger.specs, [
    {
      "name": "METHOD",
      "request": {
        "method": "get",
        "path": "/v2/pet/{petId}/uploadImage"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/pet/{petId}/uploadImage"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/pet/{petId}/uploadImage"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/pet/{petId}/uploadImage"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "get",
        "path": "/v2/pet"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/pet"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/pet"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "post",
        "path": "/v2/pet/findByStatus"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/pet/findByStatus"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/pet/findByStatus"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/pet/findByStatus"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "post",
        "path": "/v2/pet/findByTags"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/pet/findByTags"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/pet/findByTags"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/pet/findByTags"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/pet/{petId}"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/pet/{petId}"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "get",
        "path": "/v2/store/order"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/store/order"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/store/order"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/store/order"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "post",
        "path": "/v2/store/order/{orderId}"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/store/order/{orderId}"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/store/order/{orderId}"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "post",
        "path": "/v2/store/inventory"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/store/inventory"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/store/inventory"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/store/inventory"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "get",
        "path": "/v2/user/createWithArray"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/user/createWithArray"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/user/createWithArray"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/user/createWithArray"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "get",
        "path": "/v2/user/createWithList"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/user/createWithList"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/user/createWithList"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/user/createWithList"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "post",
        "path": "/v2/user/{username}"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/user/{username}"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "post",
        "path": "/v2/user/login"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/user/login"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/user/login"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/user/login"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "post",
        "path": "/v2/user/logout"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/user/logout"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/user/logout"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/user/logout"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "get",
        "path": "/v2/user"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "put",
        "path": "/v2/user"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "patch",
        "path": "/v2/user"
      },
      "expect": {
        "status": [
          405
        ]
      }
    },
    {
      "name": "METHOD",
      "request": {
        "method": "delete",
        "path": "/v2/user"
      },
      "expect": {
        "status": [
          405
        ]
      }
    }
  ]);
});

test.run();