import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "name";

export const StudentTitle = (record: TStudent): string => {
  return record.name || record.id;
};
