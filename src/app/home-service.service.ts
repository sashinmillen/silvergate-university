import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students = [
    {id: 101, name: "Alex", description: "Alex Detailes", email: "ale@xyz.com"},
    {id: 102, name: "Alexica", description: "Alexica Detailes", email: "alexica@xyz.com"},
    {id: 103, name: "Alexa", description: "Alexa Detailes", email: "alea@xyz.com"},
    {id: 104, name: "Alex folf", description: "Alex walf Detailes", email: "alewolf@xyz.com"}
  ]

  constructor() { }

  public getStudents(): Array<{id: any, name: any, description: any, email: any}>{
    return this.students;
  }    
  public createStudent(students: {id: any, name: any, description: any, email: any}){
    this.students.push(students);
  }

}
