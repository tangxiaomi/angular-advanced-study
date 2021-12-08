
export interface IPerson {
  age: number;
  gender: string;
  address: string;
  money?: number;
}

export interface IDevelop extends IPerson {
  code: boolean;
}

export enum Status {
  Fail,
  Pending,
  Success
}