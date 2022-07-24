import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rollno?: SortOrder;
  updatedAt?: SortOrder;
};
