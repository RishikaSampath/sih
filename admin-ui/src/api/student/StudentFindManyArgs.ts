import { StudentWhereInput } from "./StudentWhereInput";
import { StudentOrderByInput } from "./StudentOrderByInput";

export type StudentFindManyArgs = {
  where?: StudentWhereInput;
  orderBy?: Array<StudentOrderByInput>;
  skip?: number;
  take?: number;
};
