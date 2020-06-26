using AutoMapper;
using Credit.Dtos;
using Credit.Models;
namespace Credit.Profiles
{
    public class EmployeesProfile : Profile
    {
        public EmployeesProfile()
        {
            //Source => Target
            CreateMap<Employee, EmployeeReadDto>();
            CreateMap<EmployeeCreateDto, Employee>();
            CreateMap<EmployeeUpdateDto, Employee>();
            CreateMap<Employee, EmployeeUpdateDto>();
        }
    }
}
