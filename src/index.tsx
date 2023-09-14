import { Hono } from 'hono'
import { Start } from './pages/start';
import { Signup } from './pages/signup';
import { Users } from './pages/users';
import * as database from './database';

const app = new Hono()

app.get('/', (c) => c.html(<Start />))
app.get('/signup', (c) => c.html(<Signup />));
app.get('/users', (c) => {
  const { name, url } = c.req.query();
  database.add({ name, url });

  return c.html(<Users />);
});

export default app;
