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
    [Route("api/locations")]
    [ApiController]
    public class LocationsController : Controller
    {
        private readonly ILocationRepo _repository;

        public LocationsController(ILocationRepo repository)
        {
            _repository = repository;
        }

        //GET api/locations
        [HttpGet]
        public ActionResult<IEnumerable<Location>> GetAllLocations()
        {
            var officeLocations = _repository.GetAllLocations();
            return Ok(officeLocations);
        }

        //GET api/locations/id
        [HttpGet("{id}", Name = "GetLocationById")]
        public ActionResult<Location> GetLocationById(int id)
        {
            var officeLocation = _repository.GetLocationById(id);
            return Ok(officeLocation);
        }

        //DELETE api/books/id
        [HttpDelete("{id}")]
        public ActionResult DeleteLocation(int id)
        {
            var locationModelFromRepo = _repository.GetLocationById(id);
            if (locationModelFromRepo == null)
            {
                return NotFound();
            }
            if (locationModelFromRepo.Employees.Count > 0)
            {
                return Json(new { error = "Cannot remove office locations with employees" });
            }
            _repository.DeleteLocation(locationModelFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
