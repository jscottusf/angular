using Credit.Models;
using Microsoft.EntityFrameworkCore;


namespace Credit.Data
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Book> Books { get; set; }
    }
}