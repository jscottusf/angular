﻿using System.Collections.Generic;
using AutoMapper;
using Credit.Data;
using Credit.Dtos;
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
        private readonly IMapper _mapper;

        public EmployeesController(IEmployeeRepo repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        //GET api/employees
        [HttpGet]
            public ActionResult<IEnumerable<EmployeeReadDto>> GetAllEmployees()
        {
            var employeeItems = _repository.GetAllEmployees();

            return Ok(employeeItems);
        }

        //GET api/employees/id
        [HttpGet("{id}", Name = "GetEmployeeById")]
        public ActionResult<Employee> GetEmployeeById(int id)
        {
            var employeeItem = _repository.GetEmployeeById(id);

            return Ok(employeeItem);
        }

        //POST api/employees
        [HttpPost]
        public ActionResult<EmployeeReadDto> CreateEmployee(EmployeeCreateDto employeeCreateDto)
        {
            var employeeModel = _mapper.Map<Employee>(employeeCreateDto);
            _repository.CreateEmployee(employeeModel);
            _repository.SaveChanges();

            var EmployeeReadDto = _mapper.Map<EmployeeReadDto>(employeeModel);
            return CreatedAtRoute(nameof(GetEmployeeById), new { Id = EmployeeReadDto.Id }, EmployeeReadDto);
        }

        //PUT api/employees/id
        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, EmployeeUpdateDto employeeUpdateDto)
        {
            var employeeModelFromRepo = _repository.GetEmployeeById(id);
            if (employeeModelFromRepo == null)
            {
                return NotFound();
            }
            string newLocation = employeeModelFromRepo.City + ", " + employeeModelFromRepo.State;
            var location = _repository.GetLocationByName(newLocation);
            if (location == null)
            {
                location = new Location { OfficeLocation = newLocation };
                employeeModelFromRepo.LocationId = 0;
            }
            employeeModelFromRepo.Location = location;
            _mapper.Map(employeeUpdateDto, employeeModelFromRepo);
            _repository.UpdateEmployee(employeeModelFromRepo);
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
