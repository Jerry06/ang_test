export class PaginationPage<T> {

  content: Array<T>;
  last: boolean;
  first: boolean;
  number: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
  sort: Array<PaginationPropertySort>;
}

export class PaginationPropertySort {
  direction: string;
  property: string;

}
