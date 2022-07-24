import { Module } from "@nestjs/common";
import { StudentModuleBase } from "./base/student.module.base";
import { StudentService } from "./student.service";
import { StudentController } from "./student.controller";
import { StudentResolver } from "./student.resolver";

@Module({
  imports: [StudentModuleBase],
  controllers: [StudentController],
  providers: [StudentService, StudentResolver],
  exports: [StudentService],
})
export class StudentModule {}
