export default function createIteratorObject(report) {
  const emp = [];
  for (const dep of Object.keys(report.allEmployees)) {
    for (const empl of report.allEmployees[dep]) {
      emp.push(empl);
    }
  }
  return emp;
}
