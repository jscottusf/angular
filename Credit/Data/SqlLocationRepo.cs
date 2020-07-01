using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Credit.Models;
using Microsoft.EntityFrameworkCore;

namespace Credit.Data
{
    public class SqlLocationRepo : ILocationRepo
    {
        private readonly EmployeeContext _context;

        public SqlLocationRepo(EmployeeContext context)
        {
            _context = context;
        }

        public void DeleteLocation(Location location)
        {
            if (location == null)
            {
                throw new ArgumentNullException(nameof(location));
            }
            //var employees = _context.Locations.FirstOrDefault(l => l.Employees.Count )
            
            _context.Locations.Remove(location);
        }

        public IEnumerable<Location> GetAllLocations()
        {
            return _context.Locations.Include(l => l.Employees).ToList();
        }

        public Location GetLocationById(int id)
        {
            //.Include(e => e.Location)
            return _context.Locations.Include(l => l.Employees).FirstOrDefault(p => p.LocationId == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }
    }
}
