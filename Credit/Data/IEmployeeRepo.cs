using System.Collections.Generic;
using Credit.Models;

namespace Credit.Data
{
    public interface IEmployeeRepo
    {
        bool SaveChanges();
        IEnumerable<Employee> GetAllEmployees();
        Employee GetEmployeeById(int id);
        void CreateEmployee(Employee emp);
        void UpdateEmployee(Employee emp);
        void DeleteEmployee(Employee emp);
    }
}