const HTTP_METHODS = ['get', 'post', 'put', 'patch', 'delete'];

class Swagger {

  constructor(data) {
    this.data = data;
    this.basePath = data.basePath;
    this.requests = [];
  }

  fuzz() {
    this.fuzzPathMethods();
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