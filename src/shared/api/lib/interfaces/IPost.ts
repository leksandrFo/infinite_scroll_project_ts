export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostProps {
  post: IPost
}