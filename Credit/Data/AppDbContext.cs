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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Location>().HasMany(l => l.Employees).WithOne(l => l.Location);
            modelBuilder.Entity<Location>().HasIndex(l => l.OfficeLocation).IsUnique();
        }
    }
}