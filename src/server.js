const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    /**
     * Kriteria 1
     * Intruksi menggunakan port 9000
     * dikarenakan di laptop windows 10 tidak bisa di jalankan di postman
     * maka sementara menggunakan port 5000 untuk melakukan testing di postman
     */
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
