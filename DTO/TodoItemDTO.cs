using System.ComponentModel.DataAnnotations;

namespace ToDoApp.DTO
{
    public class TodoItemDTO
    {
        [Key]
        public long Id { get; set; }
        public string? Name { get; set; }
        public bool IsComplete { get; set; }
        public string? CreationDate { get; set; }

        public TodoItemDTO()
        {
            this.CreationDate = DateTime.UtcNow.ToString("dd.MM.yyyy HH:mm:ss");
        }
    }
}
