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
    [Route("api/books")]
    [ApiController]
    public class BooksController : Controller
    {
        private readonly IBookRepo _repository;

        public BooksController(IBookRepo repository)
        {
            _repository = repository;
        }

        //GET api/books
        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetAllBooks()
        {
            var bookItems = _repository.GetAllBooks();
            return Ok(bookItems);
        }

        //GET api/books/id
        [HttpGet("{id}", Name = "GetBookById")]
        public ActionResult<Book> GetBookById(int id)
        {
            var bookItem = _repository.GetBookById(id);
            return Ok(bookItem);
        }

        //POST api/books
        [HttpPost]
        public ActionResult<Book> CreateBook(Book book)
        {
            _repository.CreateBook(book);
            _repository.SaveChanges();

            return CreatedAtRoute(nameof(GetBookById), new { Id = book.BookId }, book);
        }

        //PUT api/books/id
        [HttpPut("{id}")]
        public ActionResult UpdateBook(int id, Book book)
        {
            var bookModelFromRepo = _repository.GetBookById(id);
            if (bookModelFromRepo == null)
            {
                return NotFound();
            }
            var updatedBook = new Book
            {
                BookId = bookModelFromRepo.BookId,
                Title = bookModelFromRepo.Title,
                Author = bookModelFromRepo.Author,
                Description = bookModelFromRepo.Description,
                ImageUrl = bookModelFromRepo.ImageUrl,
                Info = bookModelFromRepo.Info,
                Preview = bookModelFromRepo.Preview
            };
            _repository.DeleteBook(bookModelFromRepo);
            _repository.UpdateBook(updatedBook);
            _repository.SaveChanges();
            return NoContent();
        }

        //DELETE api/books/id
        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            var bookModelFromRepo = _repository.GetBookById(id);
            if (bookModelFromRepo == null)
            {
                return NotFound();
            }
            _repository.DeleteBook(bookModelFromRepo);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
