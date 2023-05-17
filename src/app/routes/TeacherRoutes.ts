import { TeacherController } from "app/controllers/TeacherController";
import { TeacherRepository } from "infra/repositories/TeacherRepository";
import { Router } from "express"

 export class TeacherRoutes {

    private _router: Router;
    private _teacherRepository: TeacherRepository;
    private _teacherController: TeacherController;

    //PRINCIPIOS SOLID.

    constructor(){
        this._router = Router();
        this._teacherRepository = new TeacherRepository();
        this._teacherController = new TeacherController();
    }
 }
