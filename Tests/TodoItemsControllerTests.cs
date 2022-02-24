using NUnit.Framework;
using System;
using System.Threading.Tasks;
using ToDoApp.Models;
using TodoApi.Controllers;
using ToDoApp.DTO;

namespace ToDoApp.Controllers
{
    [TestFixture]
    public class TodoItemsControllerTests
    {
        public TodoContext TODO { get; private set; }

        [Test]
        public async Task GetTodoItems_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var todoItemsController = new TodoItemsController(TODO);

            // Act
            var result = await todoItemsController.GetTodoItems();

            // Assert
            Assert.Fail();
        }

        [Test]
        public async Task GetTodoItem_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var todoItemsController = new TodoItemsController(TODO);
            long id = 0;

            // Act
            var result = await todoItemsController.GetTodoItem(
                id);

            // Assert
            Assert.Fail();
        }

        [Test]
        public async Task UpdateTodoItem_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var todoItemsController = new TodoItemsController(TODO);
            long id = 0;
            TodoItemDTO todoItemDTO = null;

            // Act
            var result = await todoItemsController.UpdateTodoItem(
                id,
                todoItemDTO);

            // Assert
            Assert.Fail();
        }

        [Test]
        public async Task CreateTodoItem_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var todoItemsController = new TodoItemsController(TODO);
            TodoItemDTO todoItemDTO = null;

            // Act
            var result = await todoItemsController.CreateTodoItem(
                todoItemDTO);

            // Assert
            Assert.Fail();
        }

        [Test]
        public async Task DeleteTodoItem_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var todoItemsController = new TodoItemsController(TODO);
            long id = 0;

            // Act
            var result = await todoItemsController.DeleteTodoItem(
                id);

            // Assert
            Assert.Fail();
        }
    }
}
