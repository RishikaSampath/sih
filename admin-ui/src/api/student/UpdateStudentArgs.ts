import { StudentWhereUniqueInput } from "./StudentWhereUniqueInput";
import { StudentUpdateInput } from "./StudentUpdateInput";

export type UpdateStudentArgs = {
  where: StudentWhereUniqueInput;
  data: StudentUpdateInput;
};
