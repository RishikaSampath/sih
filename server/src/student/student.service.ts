import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { StudentServiceBase } from "./base/student.service.base";

@Injectable()
export class StudentService extends StudentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
