import { Teacher } from './../../domain/entities/Teacher';
import { ITeacherRepository } from "domain/interfaces/ITeacherRepository";
import { Request, Response } from 'express';
// LA API PUEDE SER MEJORADA POR MEDIO DE VALIDACIONES.
 export class TeacherController {

    constructor( private _teacherRepository: ITeacherRepository ){
    }
    //Asincronía y sincronía. (Consultar.)
    public async create( request:Request, response: Response ): Promise<Response> {
        try {
            const {name, description, email, birthDate} = request.body;
            const teacher: Teacher = new Teacher(name, description, email, new Date(birthDate));
            const createdTeacher = await this._teacherRepository.create(teacher);
    
            return response.status(201).json( createdTeacher )
        }
        
         catch(error){
        // EL error se utiliza ahi a modo de ejemplo no se puede mostrar en una empresa.
        console.log(error)
        return response.status(500).json({
            errorMessage: 'Houston tenemos un problema!',
            code: 99999
        });



        }
      
    }
 }
