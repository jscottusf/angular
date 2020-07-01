using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Credit.Models;
using Microsoft.EntityFrameworkCore;

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
            var location = _context.Locations.SingleOrDefault(l => l.OfficeLocation == newLocation);
            if (location == null)
            {
                location = new Location { OfficeLocation = newLocation };
            }
            emp.Location = location;
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

        public IEnumerable<Employee> Find(Expression<Func<Employee, bool>> expression)
        {
            return _context.Set<Employee>().Where(expression);
        }

        public Employee GetEmployeeById(int id)
        {
            //.Include(e => e.Location)
            return _context.Employees.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateEmployee(Employee emp)
        {
            if (emp == null)
            {
                throw new ArgumentNullException(nameof(emp));
            }
            string newLocation = emp.City + ", " + emp.State;
            var location = _context.Locations.SingleOrDefault(l => l.OfficeLocation == newLocation);
            if (location == null)
            {
                location = new Location { OfficeLocation = newLocation };
            }
            emp.Location = location;
            _context.Employees.Update(emp);
        }

        public Location GetLocationByName(string location)
        {
            return _context.Locations.Single(l => l.OfficeLocation == location);
        }
    }
}
