interface User {
  name: string;
  url: string;
  points: number;
}

const users: Array<User> = []

export const add = (user: Omit<User, 'points'>) => {
  users.push({ ...user, points: 0 });
}

export const get = (): ReadonlyArray<User> => users;
