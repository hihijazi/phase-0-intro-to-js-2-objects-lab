const employee = {
    name: "Hadil Hijazi",
    streetAddress: "123 Main St"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 28);
console.log(employee);
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    if (newEmployee.hasOwnProperty(key)) {
        delete newEmployee[key];
    }
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}