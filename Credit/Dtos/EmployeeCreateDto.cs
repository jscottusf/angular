﻿using System.ComponentModel.DataAnnotations;
using Credit.Models;

namespace Credit.Dtos
{
    public class EmployeeCreateDto
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Department { get; set; }
        public string Gender { get; set; }
    }
}
