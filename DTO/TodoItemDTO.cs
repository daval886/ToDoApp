using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace ToDoApp.DTO
{
    public class TodoItemDTO
    {
        [Key]
        public long Id { get; set; }
        public string? Name { get; set; }
        public bool IsComplete { get; set; }

        [Unique]
        public string? CreationDate { get; set; } = DateTime.UtcNow.ToString("dd.MM.yyyy HH:mm:ss");
    }
}
