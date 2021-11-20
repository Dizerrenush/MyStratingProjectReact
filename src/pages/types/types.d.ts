export namespace IFeedbacks {

  interface IListItem {
    id: number;
    description: string;
    creator: IClient;
  }
  interface IClient {
    fullname: string;
    email: string;
  }
}
