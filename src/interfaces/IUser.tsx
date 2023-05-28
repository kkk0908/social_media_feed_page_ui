interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IUserState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

export type { IUser, IUserState };
