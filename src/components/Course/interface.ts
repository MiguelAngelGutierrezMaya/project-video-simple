export interface IVideo {
  id: number;
  title: string;
  description: string;
  url: string;
  comments: IComment[];
}

export interface IComment {
  id: number;
  author: string;
  text: string;
}
