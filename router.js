import http from "http";

class Router {
  handlers = new Map();

  constructor(port) {
    this.server = new http.createServer((req, res) => {
      const [route] = req.url.split('?');
      const handler = this.handlers.get(route);

      if (handler) handler(req, res);
      else {
        res.setHeader("Content-Type", "application/json");

        return res.end(
          JSON.stringify({
            status: 404,
            message: `[${req.method}] ${req.url} not found.`,
          })
        );
      }
    }).listen(port);
  }

  get = (route, callback) => {
    const getHandler = (req, res) => {
      if (req.method.toLowerCase() == "get") {
        console.log(`[${req.method}] "${req.url}" processing.`);
        res.json = (data) => res.end(JSON.stringify(data));

        try {
          return callback?.(req, res);
        } catch (error) {
          console.error(error);

          throw error;
        } finally {
          console.log(`[${req.method}] "${req.url}" processing ended.`);
        }
      }
    };

    this.handlers.set(route, getHandler);
  };
}

export default new Router(3004);
