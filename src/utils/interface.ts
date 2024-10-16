export interface PaginationModel {
    page: number;
    pageSize: number;
  }


export type Role = "System Admin" | "Field Admin" | "Field Associate" | "Reporting";

export interface Member {
  name: string;
  email: string;
}