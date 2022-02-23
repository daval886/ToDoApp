using System.ComponentModel.DataAnnotations;

namespace ToDoApp.Models
{
    public class TodoItem
    {
        [Key]
        public long Id { get; set; }
        public string? Name { get; set; }
        public bool IsComplete { get; set; }
        public string? CreationDate { get; set; }
        public string? Secret { get; set; }

        public TodoItem()
        {
            CreationDate = DateTime.UtcNow.ToString("dd.MM.yyyy HH:mm:ss");
        }
    }
}
