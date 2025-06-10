using LibraryApp.Models;

namespace LibraryApp.Data;

public static class DbInitializer
{
    public static void Seed(LibraryContext context)
    {
        if (context.Editions.Any()) return;

        context.AddRange(
            new Book { Publisher = "Penguin", Year = 2020, Title = "C# in Depth", Author = "Jon Skeet", Pages = 900, Topic = "Programming" },
            new Textbook { Publisher = "Springer", Year = 2022, Title = "Algorithms", Author = "Sedgewick", Pages = 700, Topic = "CS", Purpose = "University" },
            new Magazine { Publisher = "Time", Year = 2023, Title = "Time Magazine", IssueNumber = 12, Month = "December" },
            new Textbook { Publisher = "Pearson", Year = 2021, Title = "Math 101", Author = "Smith", Pages = 400, Topic = "Math", Purpose = "School" },
            new Book { Publisher = "O'Reilly", Year = 2019, Title = "Clean Code", Author = "Uncle Bob", Pages = 500, Topic = "Programming" }
        );
        context.SaveChanges();
    }
}