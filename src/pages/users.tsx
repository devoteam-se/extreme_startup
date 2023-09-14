import { Layout } from '../components/Layout';
import * as database from '../database';

export const Users = () => {
  const users = database.get();
  return (
    <Layout>
      <h2>Users</h2>
      {users.map(
        (user) => {
          const message = `name: ${user.name}, url: ${user.url}, points: ${user.points}`;
          return (<p>{message}</p>);
        })}
    </Layout>
  )
}
