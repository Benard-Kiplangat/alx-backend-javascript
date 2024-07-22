import createEmployeesObject from './11-createEmployeesObject'

export default function createReportObject(employeesList) {
  const allEmployeesObj = {
    allEmployees: employeesList,
    getNumberOfDepartments: (departments) => Object.getOwnPropertyNames(departments).length,
  }

  return allEmployeesObj
}