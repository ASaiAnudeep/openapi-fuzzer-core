const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete'];

class Swagger {

  constructor(data) {
    this.data = data;
    this.basePath = data.basePath;
    this.specs = [];
  }

  fuzz() {
    this.fuzzPaths();
    this.fuzzPathMethods();
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
          status: [ 404 ]
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
            status: [ 404 ]
          }
        });
      }
    }
  }

  fuzzPathMethods() {
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
              status: [ 405 ]
            }
          });
        }
      });
    }
  }

}

module.exports = Swagger;