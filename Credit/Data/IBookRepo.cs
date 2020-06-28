﻿using System.Collections.Generic;
using Credit.Models;

namespace Credit.Data
{
    public interface IBookRepo
    {
        bool SaveChanges();
        IEnumerable<Book> GetAllBooks();
        Book GetBookById(int id);
        void CreateBook(Book book);
        void UpdateBook(Book book);
        void DeleteBook(Book book);
    }
}
