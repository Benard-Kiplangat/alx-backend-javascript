import createEmployeesObject from './11-createEmployeesObject'

export default function createReportObject(employeesList) {
    const allEmployeesObj = {}
    allEmployeesObj.allEmployees = {}
    allEmployeesObj.allEmployees.append([...employeesList])   
}