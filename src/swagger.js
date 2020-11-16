const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete'];

class Swagger {

  constructor(data) {
    this.data = data;
    this.basePath = data.basePath;
    this.requests = [];
  }

  fuzz() {
    this.fuzzPaths();
    this.fuzzPathMethods();
  }

  fuzzPaths() {
    HTTP_METHODS.forEach(method => {
      this.requests.push({
        method,
        path: '/ROOT/INVALID/PATH'
      });
    });
    for (const route of Object.keys(this.data.paths)) {
      const path = this.data.paths[route];
      for (const method of Object.keys(path)) {
        this.requests.push({
          method,
          path: `${this.basePath}${route}/INVALID/PATH`
        });
      }
    }
  }

  fuzzPathMethods() {
    for (const route of Object.keys(this.data.paths)) {
      const path = this.data.paths[route];
      HTTP_METHODS.forEach(method => {
        if (!path[method]) {
          this.requests.push({
            method,
            path: `${this.basePath}${route}`
          });
        }
      });
    }
  }

}

module.exports = Swagger;