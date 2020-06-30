using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Credit.Models;

namespace Credit.Data
{
    public interface IEmployeeRepo
    {
        bool SaveChanges();
        IEnumerable<Employee> GetAllEmployees();
        IEnumerable<Employee> Find(Expression<Func<Employee, bool>> expression);
        Employee GetEmployeeById(int id);
        Location GetLocationByName(string loc);
        void CreateEmployee(Employee emp);
        void UpdateEmployee(Employee emp);
        void DeleteEmployee(Employee emp);
    }
}