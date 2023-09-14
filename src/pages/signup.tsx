import { Layout } from '../components/Layout';

export const Signup = () => {
  return (
    <Layout>
      <form action="/users">
        <label for="name">name</label>
        <input type="text" name="name"  required />
        <br />
        <label for="url">url</label>
        <input type="text" name="url"  required />
        <br />
        <button type="submit">Join the game</button>
      </form>
    </Layout>
  )
}
