using Microsoft.EntityFrameworkCore;
using LibraryApp.Models;

namespace LibraryApp.Data;

public class LibraryContext : DbContext
{
    public LibraryContext(DbContextOptions<LibraryContext> options) : base(options) { }

    public DbSet<PrintedEdition> Editions => Set<PrintedEdition>();
    public DbSet<Book> Books => Set<Book>();
    public DbSet<Magazine> Magazines => Set<Magazine>();
    public DbSet<Textbook> Textbooks => Set<Textbook>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PrintedEdition>().HasKey(e => e.Id);
        modelBuilder.Entity<Book>().HasBaseType<PrintedEdition>();
        modelBuilder.Entity<Magazine>().HasBaseType<PrintedEdition>();
        modelBuilder.Entity<Textbook>().HasBaseType<Book>();
    }
}