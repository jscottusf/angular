using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Credit.Models
{
    public class Location
    {
        [Key]
        public int LocationId { get; set; }
        [Required]
        public string OfficeLocation { get; set; }
        public virtual List<Employee> Employees { get; set; } 
    }
}