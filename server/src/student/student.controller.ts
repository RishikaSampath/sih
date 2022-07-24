import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StudentService } from "./student.service";
import { StudentControllerBase } from "./base/student.controller.base";

@swagger.ApiTags("students")
@common.Controller("students")
export class StudentController extends StudentControllerBase {
  constructor(
    protected readonly service: StudentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
