namespace LibraryApp.Models;

public class Book : PrintedEdition
{
    public string Topic { get; set; } = "";
    public string Author { get; set; } = "";
    public int Pages { get; set; }
}