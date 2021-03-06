using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace ToDoApp.Models
{
    public class TodoItem
    {
        [Key]
        public long Id { get; set; }
        public string? Name { get; set; }
        public bool IsComplete { get; set; }

        [Unique]
        public string? CreationDate { get; set; } = DateTime.Now.ToString("dd.MM.yyyy HH:mm:ss");
        public string? Secret { get; set; }
    }
}
