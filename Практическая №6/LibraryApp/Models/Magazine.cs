namespace LibraryApp.Models;

public class Magazine : PrintedEdition
{
    public int IssueNumber { get; set; }
    public string Month { get; set; } = "";
}