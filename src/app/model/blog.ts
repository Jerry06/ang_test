import {UserOAuthInfo} from "./userOAuthInfo";
export interface Blog {
  id?: string;
  title?: string;
  content?: string;
  img?: string;
  category?: Category;
  tags?: Array<Tag>;
  comments?: Array<Comment>;
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
