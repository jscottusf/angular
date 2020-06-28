﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Credit.Models;

namespace Credit.Data
{
    public class SqlBookRepo : IBookRepo
    {
        private readonly EmployeeContext _context;

        public SqlBookRepo(EmployeeContext context)
        {
            _context = context;
        }

        public void CreateBook(Book book)
        {
            if (book == null)
            {
                throw new ArgumentNullException(nameof(book));
            }
            _context.Books.Add(book);
        }

        public void DeleteBook(Book book)
        {
            if (book == null)
            {
                throw new ArgumentNullException(nameof(book));
            }
            _context.Books.Remove(book);
        }

        public IEnumerable<Book> GetAllBooks()
        {
            return _context.Books.ToList();
        }

        public Book GetBookById(int id)
        {
            return _context.Books.FirstOrDefault(b => b.BookId == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateBook(Book book)
        {
            _context.Books.Update(book);
        }
    }
}
