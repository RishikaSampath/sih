import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  rollno?: IntNullableFilter;
};
