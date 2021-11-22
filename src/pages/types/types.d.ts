export namespace IFeedbacks {

  interface IListItem extends IClient{
    id: number;
    description: string;
  }

  interface IClient {
    fullname?: string;
    email?: string;
  }
}
