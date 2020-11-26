const test = require('uvu').test;
const assert = require('uvu/assert');
const fuzz = require('../src/index');
const Swagger = require('../src/swagger');

test('swagger - fuzz', () => {
  const data = require('./data/swagger-pet-store-v2.json');
  const specs = fuzz.swagger(data);
  assert.equal(specs.length, 125);
});

test('swagger - fuzzPaths', () => {
  const data = require('./data/swagger-pet-store-v2.json');
  const swagger = new Swagger(data);
  swagger.fuzzPaths();
  assert.equal(swagger.specs, [
    {
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_PATH",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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
      "name": "INVALID_METHOD",
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

test('swagger - fuzzParams', () => {
  const data = require('./data/swagger-pet-store-v2.json');
  const swagger = new Swagger(data);
  swagger.fuzzParams();
  assert.equal(swagger.specs, [
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet/{petId}/uploadImage",
        "pathParams": {
          "petId": "STRING"
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet/{petId}/uploadImage",
        "pathParams": {
          "petId": true
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": ""
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": "STRING"
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": 10
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": true
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": null
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": []
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": ""
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": "STRING"
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": 10
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": true
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": null
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/pet",
        "queryParams": {},
        "pathParams": {},
        "body": []
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/pet/{petId}",
        "pathParams": {
          "petId": "STRING"
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/pet/{petId}",
        "pathParams": {
          "petId": true
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet/{petId}",
        "pathParams": {
          "petId": "STRING"
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/pet/{petId}",
        "pathParams": {
          "petId": true
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "delete",
        "path": "/v2/pet/{petId}",
        "pathParams": {
          "petId": "STRING"
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "delete",
        "path": "/v2/pet/{petId}",
        "pathParams": {
          "petId": true
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/store/order",
        "queryParams": {},
        "pathParams": {},
        "body": ""
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/store/order",
        "queryParams": {},
        "pathParams": {},
        "body": "STRING"
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/store/order",
        "queryParams": {},
        "pathParams": {},
        "body": 10
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/store/order",
        "queryParams": {},
        "pathParams": {},
        "body": true
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/store/order",
        "queryParams": {},
        "pathParams": {},
        "body": null
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/store/order",
        "queryParams": {},
        "pathParams": {},
        "body": []
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/store/order/{orderId}",
        "pathParams": {
          "orderId": "STRING"
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/store/order/{orderId}",
        "pathParams": {
          "orderId": true
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/store/order/{orderId}",
        "pathParams": {
          "orderId": 0
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/store/order/{orderId}",
        "pathParams": {
          "orderId": 11
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "delete",
        "path": "/v2/store/order/{orderId}",
        "pathParams": {
          "orderId": "STRING"
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "delete",
        "path": "/v2/store/order/{orderId}",
        "pathParams": {
          "orderId": true
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "delete",
        "path": "/v2/store/order/{orderId}",
        "pathParams": {
          "orderId": 0
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/user/{username}",
        "pathParams": {
          "username": 10
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/user/{username}",
        "pathParams": {
          "username": 10
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/user/{username}",
        "queryParams": {},
        "pathParams": {
          "username": "username"
        },
        "body": ""
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/user/{username}",
        "queryParams": {},
        "pathParams": {
          "username": "username"
        },
        "body": "STRING"
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/user/{username}",
        "queryParams": {},
        "pathParams": {
          "username": "username"
        },
        "body": 10
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/user/{username}",
        "queryParams": {},
        "pathParams": {
          "username": "username"
        },
        "body": true
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/user/{username}",
        "queryParams": {},
        "pathParams": {
          "username": "username"
        },
        "body": null
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "put",
        "path": "/v2/user/{username}",
        "queryParams": {},
        "pathParams": {
          "username": "username"
        },
        "body": []
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_PATH_PARAM",
      "request": {
        "method": "delete",
        "path": "/v2/user/{username}",
        "pathParams": {
          "username": 10
        }
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_QUERY_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/user/login",
        "queryParams": {
          "username": 10
        },
        "pathParams": {}
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_QUERY_PARAM",
      "request": {
        "method": "get",
        "path": "/v2/user/login",
        "queryParams": {
          "username": "username",
          "password": 10
        },
        "pathParams": {}
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/user",
        "queryParams": {},
        "pathParams": {},
        "body": ""
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/user",
        "queryParams": {},
        "pathParams": {},
        "body": "STRING"
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/user",
        "queryParams": {},
        "pathParams": {},
        "body": 10
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/user",
        "queryParams": {},
        "pathParams": {},
        "body": true
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/user",
        "queryParams": {},
        "pathParams": {},
        "body": null
      },
      "expect": {
        "status": [
          400
        ]
      }
    },
    {
      "name": "INVALID_BODY_PARAM",
      "request": {
        "method": "post",
        "path": "/v2/user",
        "queryParams": {},
        "pathParams": {},
        "body": []
      },
      "expect": {
        "status": [
          400
        ]
      }
    }
  ]);
});

test.run();