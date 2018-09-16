const Koa = require('koa');
// const { Nuxt, Builder } = require('nuxt');
const { Nuxt } = require('nuxt');

// const app = new Koa();
// const host = process.env.HOST || 'localhost';
// const port = process.env.PORT || 8080;

// Import and Set Nuxt.js options
// let config = require('../nuxt.config.js');
// config.dev = !(app.env === 'production');

async function start() {
  const app = new Koa();
  const config = require('../nuxt.config.js');
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  // Build in development
  // if (config.dev) {
  //   const builder = new Builder(nuxt);
  //   await builder.build();
  // }

  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err);
    }

    ctx.status = 200; // koa defaults to 404 when it sees that status is unset
    ctx.set('Cache-Control', 'public, max-age=10800');
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  });

  app.on('error', err => {
    console.error(err);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Server listening on http://localhost:' + port); // eslint-disable-line no-console
}

start();
