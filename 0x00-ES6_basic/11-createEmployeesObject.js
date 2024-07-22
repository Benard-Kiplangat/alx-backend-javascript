export default function createEmployeesObject(departmentName, employees) {
  const departmentObj = {
    [departmentName]: [
        ...employees
    ],
  }

  return departmentObj;
}