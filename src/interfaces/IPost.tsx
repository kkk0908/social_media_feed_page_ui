interface IImages {
  file: string;
  createdBy: string;
  createdAt: string;
}

interface ITages {
  _id: string;
  name: string;
  createdBy: string;
  createdAt: string;
}

interface IPost {
  _id?: string;
  title?: string;
  contents?: string;
  images?: IImages[];
  createdBy?: string;
  createdAt?: string;
  updateAt?: string;
  likesCount?: number;
  shareCount?: number;
  saveCount?: number;
  downloadCount?: number;
  tags?: ITages[];
  isArchive?: true;
}

interface IPostState {
  posts: IPost[];
  loading: boolean;
  error: string;
}
export type { IPostState, IPost, IImages };
