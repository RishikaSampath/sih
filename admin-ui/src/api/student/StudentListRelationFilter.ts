import { StudentWhereInput } from "./StudentWhereInput";

export type StudentListRelationFilter = {
  every?: StudentWhereInput;
  some?: StudentWhereInput;
  none?: StudentWhereInput;
};
