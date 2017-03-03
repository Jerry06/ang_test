import {UserOAuthInfo} from "./userOAuthInfo";
export class Blog {
  id: string;
  title: string;
  content: string;
  img: string;
  comments: Array<Comment>;
}

export interface Category {
  name: string;
}

export interface Tag {
  name: string;
}

export interface Comment {
  content: string;
  createdBy: UserOAuthInfo;
  replies: Array<Reply>;
}

export interface Reply {
  content: string;
  createdBy: UserOAuthInfo;
}
