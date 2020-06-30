using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Credit.Models;

namespace Credit.Data
{
    public interface ILocationRepo
    {
        bool SaveChanges();
        IEnumerable<Location> GetAllLocations();
        Location GetLocationById(int id);
        void DeleteLocation(Location location);
    }
}
