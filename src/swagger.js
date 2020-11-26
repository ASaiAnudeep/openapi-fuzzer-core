const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete'];

class Swagger {

  constructor(data) {
    this.data = data;
    this.basePath = data.basePath;
    this.specs = [];
  }

  fuzz() {
    this.fuzzPaths();
    this.fuzzMethods();
    this.fuzzParams();
  }

  fuzzPaths() {
    HTTP_METHODS.forEach(method => {
      this.specs.push({
        name: 'INVALID_PATH',
        request: {
          method,
          path: '/ROOT/INVALID/PATH'
        },
        expect: {
          status: [404]
        }
      });
    });
    for (const route of Object.keys(this.data.paths)) {
      const path = this.data.paths[route];
      for (const method of Object.keys(path)) {
        this.specs.push({
          name: 'INVALID_PATH',
          request: {
            method,
            path: `${this.basePath}${route}/INVALID/PATH`
          },
          expect: {
            status: [404]
          }
        });
      }
    }
  }

  fuzzMethods() {
    for (const route of Object.keys(this.data.paths)) {
      const path = this.data.paths[route];
      HTTP_METHODS.forEach(method => {
        if (!path[method]) {
          this.specs.push({
            name: 'INVALID_METHOD',
            request: {
              method,
              path: `${this.basePath}${route}`
            },
            expect: {
              status: [405]
            }
          });
        }
      });
    }
  }

  fuzzParams() {
    for (const route of Object.keys(this.data.paths)) {
      const path = this.data.paths[route];
      for (const method of Object.keys(path)) {
        const info = path[method];
        const parameters = info.parameters;
        if (parameters && parameters.length > 0) {
          this.fuzzPathParams(route, method, parameters);
          this.fuzzQueryParams(route, method, parameters);
          this.fuzzBodyParams(route, method, parameters);
        }
      }
    }
  }

  fuzzPathParams(route, method, parameters) {
    const pathParameters = parameters.filter(parameter => parameter.in === 'path');
    const fakePathParams = this.getFakeParams(pathParameters);
    for (const parameter of pathParameters) {
      const values = this.fuzzParameter(parameter);
      for (const value of values) {
        const pathParams = Object.assign({}, fakePathParams);
        pathParams[`${parameter.name}`] = value;
        this.specs.push({
          name: 'INVALID_PATH_PARAM',
          request: {
            method,
            path: `${this.basePath}${route}`,
            pathParams
          },
          expect: {
            status: [400]
          }
        });
      }
    }
  }

  fuzzQueryParams(route, method, parameters) {
    const pathParameters = parameters.filter(parameter => parameter.in === 'path');
    const pathParams = this.getFakeParams(pathParameters);
    const queryParameters = parameters.filter(parameter => parameter.in === 'query');
    const previousQueryParams = {};
    for (const parameter of queryParameters) {
      const values = this.fuzzParameter(parameter);
      for (const value of values) {
        const queryParams = Object.assign({}, previousQueryParams);
        queryParams[`${parameter.name}`] = value;
        this.specs.push({
          name: 'INVALID_QUERY_PARAM',
          request: {
            method,
            path: `${this.basePath}${route}`,
            queryParams,
            pathParams
          },
          expect: {
            status: [400]
          }
        });
      }
      previousQueryParams[`${parameter.name}`] = this.fakeParameter(parameter);
    }
  }

  fuzzBodyParams(route, method, parameters) {
    const pathParameters = parameters.filter(parameter => parameter.in === 'path');
    const pathParams = this.getFakeParams(pathParameters);
    const queryParameters = parameters.filter(parameter => parameter.in === 'query');
    const queryParams = this.getFakeParams(queryParameters);
    const bodyParameters = parameters.filter(parameter => parameter.in === 'body');
    for (const parameter of bodyParameters) {
      const schema = parameter.schema;
      if (schema && schema['$ref']) {
        const definition = schema['$ref'].replace('#/definitions/', '');
        const values = this.fuzzSchema(this.data.definitions[definition]);
        for (const value of values) {
          this.specs.push({
            name: 'INVALID_BODY_PARAM',
            request: {
              method,
              path: `${this.basePath}${route}`,
              queryParams,
              pathParams,
              body: value
            },
            expect: {
              status: [400]
            }
          });
        }
      }
    }
  }

  fuzzParameter(parameter) {
    switch (parameter.type) {
      case 'integer':
        return this.fuzzIntegerParam(parameter);
      case 'string':
        return this.fuzzStringParam();
      case 'boolean':
        return this.fuzzBooleanParam();
      default:
        return [];
    }
  }

  fuzzIntegerParam(parameter) {
    const values = ['STRING', true];
    if (typeof parameter.minimum === 'number') {
      values.push(parameter.minimum - 1);
    }
    if (typeof parameter.maximum === 'number') {
      values.push(parameter.maximum + 1);
    }
    return values;
  }

  fuzzStringParam() {
    return [10];
  }

  fuzzBooleanParam() {
    return ['STRING', 10];
  }

  fuzzSchema(schema) {
    if (schema.type === 'object') {
      return [ '', 'STRING', 10, true, null, []];
    }
  }

  fakeParameter(parameter) {
    switch (parameter.type) {
      case 'integer':
        return 10;
      case 'string':
        return parameter.name;
      case 'boolean':
        return true;
      default:
        return '';
    }
  }

  getFakeParams(parameters) {
    const pathParams = {};
    for (const parameter of parameters) {
      pathParams[`${parameter.name}`] = this.fakeParameter(parameter);
    }
    return pathParams;
  }

}

module.exports = Swagger;