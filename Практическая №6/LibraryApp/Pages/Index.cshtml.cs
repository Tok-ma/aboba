using LibraryApp.Data;
using LibraryApp.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace LibraryApp.Pages;

public class IndexModel : PageModel
{
    private readonly LibraryContext _context;

    public IndexModel(LibraryContext context) => _context = context;

    public IList<Book> RecentBooks { get; set; } = [];
    public int TextbookCount { get; set; }

    public async Task OnGetAsync(int? minYear)
    {
        int year = minYear ?? 2020;

        RecentBooks = await _context.Books
            .Where(b => b.Year >= year)
            .ToListAsync();

        TextbookCount = await _context.Textbooks.CountAsync();
    }
}