using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Credit.Data;
using Credit.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Credit.Controllers
{
    //api commands
    [Route("api/employees")]
    [ApiController]
    public class EmployeesController : Controller
    {

        private readonly IEmployeeRepo _repository;

        public EmployeesController(IEmployeeRepo repository)
        {
            _repository = repository;
        }

        //GET api/employees
        [HttpGet]
        public ActionResult <IEnumerable<Employee>> GetAllEmployees()
        {
            var employeeItems = _repository.GetAllEmployees();

            return Ok(employeeItems);
        }

        //GET api/employees/id
        [HttpGet("{id}", Name = "GetEmployeeById")]
        public ActionResult <Employee> GetEmployeeById(int id)
        {
            var employeeItem = _repository.GetEmployeeById(id);

            return Ok(employeeItem);
        }

        //POST api/employees
        [HttpPost]
        public ActionResult<Employee> CreateEmployee(Employee emp)
        {
            _repository.CreateEmployee(emp);
            _repository.SaveChanges();

            return CreatedAtRoute(nameof(GetEmployeeById), new { Id = emp.Id }, emp);
        }

        //PUT api/employees/id
        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, Employee emp)
        {
            var employeeModelFromRepo = _repository.GetEmployeeById(id);
            if (employeeModelFromRepo == null)
            {
                return NotFound();
            }
            var employee = new Employee {
                Id = employeeModelFromRepo.Id,
                FirstName = emp.FirstName,
                LastName = emp.LastName,
                City = emp.City,
                Department = emp.Department,
                Gender = emp.Gender
            };
            _repository.DeleteEmployee(employeeModelFromRepo);
            _repository.UpdateEmployee(employee);
            _repository.SaveChanges();
            return NoContent();
        }

        //DELETE api/employees/id
        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var employeeModelFromRepo = _repository.GetEmployeeById(id);
            if (employeeModelFromRepo == null)
            {
                return NotFound();
            }
            _repository.DeleteEmployee(employeeModelFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
