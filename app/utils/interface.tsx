export interface Comments {
  name: string;
  email: string;
  _createdAt: string;
  _id: string;
  comment: string;
  approved: boolean;
  postID: string;
  post: {
    _ref: string;
    _type: string;
  };
}
