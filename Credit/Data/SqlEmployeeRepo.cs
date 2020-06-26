using System;
using System.Collections.Generic;
using System.Linq;
using Credit.Models;

namespace Credit.Data
{
    public class SqlEmployeeRepo : IEmployeeRepo
    {
        private readonly EmployeeContext _context;

        public SqlEmployeeRepo(EmployeeContext context)
        {
            _context = context;
        }

        public void CreateEmployee(Employee emp)
        {
            if (emp == null)
            {
                throw new ArgumentNullException(nameof(emp));
            }
            string newLocation = emp.City + ", " + emp.State;
            var location = new Location { OfficeLocation = newLocation };
            _context.Locations.Add(location);
            _context.Employees.Add(emp);
        }

        public void DeleteEmployee(Employee emp)
        {
            if (emp == null)
            {
                throw new ArgumentNullException(nameof(emp));
            }

            _context.Employees.Remove(emp);
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
            return _context.Employees.ToList();
        }

        public Employee GetEmployeeById(int id)
        {
            return _context.Employees.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateEmployee(Employee emp)
        {
            //_context.Employees.Update(emp);
        }
    }
}
