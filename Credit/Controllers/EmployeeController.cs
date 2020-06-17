using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Credit.Data;
using Credit.Models;
using Microsoft.AspNetCore.Mvc;

namespace Credit.Controllers
{
    public class EmployeeController : Controller
    {
        DAEmployees dbClassObj = new DAEmployees();

        [HttpGet]
        [Route("api/employee/index")]
        public IEnumerable<TblEmployee> GetallEmployees()
        {
            return dbClassObj.GetAllEmployees();
        }
    }
}
