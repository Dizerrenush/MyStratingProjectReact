export namespace IFeedbacks {
  export interface IList {
    feedbacks: Array<IListItem>;
  }
  interface IListItem {
    id: number;
    client: IClient;
    description: string;
  }
  interface IClient {
    fullname: string;
    email: string;
  }
}
