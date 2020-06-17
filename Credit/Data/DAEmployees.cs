using Credit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Credit.Data
{
    public class DAEmployees
    {
        testdbContext dbContext = new testdbContext();

        public IEnumerable<TblEmployee> GetAllEmployees()
        {
            try
            {
                return dbContext.TblEmployee.ToList();
            }
            catch
            {
                throw;
            }
        }
    }
}
