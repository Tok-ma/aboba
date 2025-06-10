namespace LibraryApp.Models;

public abstract class PrintedEdition
{
    public int Id { get; set; }
    public string Publisher { get; set; } = "";
    public int Year { get; set; }
    public string Title { get; set; } = "";
}