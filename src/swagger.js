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
          // const bodyParams = parameters.filter(parameter => parameter.in === 'body');
          this.fuzzPathParams(route, method, parameters);
          this.fuzzQueryParams(route, method, parameters);
        }
      }
    }
  }

  fuzzPathParams(route, method, parameters) {
    const pathParams = parameters.filter(parameter => parameter.in === 'path');
    for (const parameter of pathParams) {
      const otherPathParams = pathParams.filter(pathParam => pathParam.name !== parameter.name);
      let currentRoute = route;
      otherPathParams.forEach(otherParam => { currentRoute = currentRoute.replace(`{${otherParam.name}}`, this.fakeParameter(otherParam)); });
      const values = this.fuzzParameter(parameter);
      for (const value of values) {
        this.specs.push({
          name: 'INVALID_PATH_PARAM',
          request: {
            method,
            path: `${this.basePath}${currentRoute.replace(`{${parameter.name}}`, value)}`
          },
          expect: {
            status: [400]
          }
        });
      }
    }
  }

  fuzzQueryParams(route, method, parameters) {
    const pathParams = parameters.filter(parameter => parameter.in === 'path');
    const queryParams = parameters.filter(parameter => parameter.in === 'query');
    const previousQueryParams = {};
    for (const parameter of queryParams) {
      let currentRoute = route;
      pathParams.forEach(pathParam => { currentRoute = currentRoute.replace(`{${pathParam.name}}`, this.fakeParameter(pathParam)); });
      const values = this.fuzzParameter(parameter);
      for (const value of values) {
        const queryParams = Object.assign({}, previousQueryParams);
        queryParams[`${parameter.name}`] = value;
        this.specs.push({
          name: 'INVALID_QUERY_PARAM',
          request: {
            method,
            path: `${this.basePath}${currentRoute}`,
            queryParams
          },
          expect: {
            status: [400]
          }
        });
      }
      previousQueryParams[`${parameter.name}`] = this.fakeParameter(parameter);
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

}

module.exports = Swagger;