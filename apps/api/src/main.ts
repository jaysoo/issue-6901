import express from 'express';

// External packages should go into generated package.json
import * as morgan from 'morgan';
import 'pg';

// Should include deps from workspace libs
import '@node2/util';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
