import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskService } from '../service/task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],
})
export class CommandeComponent implements OnInit {
  tasks: Task[] = [];
  toDo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];
  projectId: string = '';
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Load tasks when projectId is provided
    if (this.projectId) {
      this.loadTasks();
    }
  }

  loadTasks(): void {
    if (this.projectId) {
      this.taskService.getTasks(this.projectId).subscribe(
        (tasks) => {
          this.tasks = tasks;
          this.toDo = this.tasks.filter((task) => task.status === 'to do');
          this.inProgress = this.tasks.filter((task) => task.status === 'in progress');
          this.done = this.tasks.filter((task) => task.status === 'done');
        },
        (error) => {
          console.error('Failed to load tasks:', error);
        }
      );
    }
  }

  onTaskDrop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const task = event.container.data[event.currentIndex];
      task.status = this.getContainerStatus(event.container.id);

      this.taskService.updateTask(task._id!, task).subscribe(
        () => {
          console.log('Task status updated successfully');
        },
        (error) => {
          console.error('Failed to update task status:', error);
          // Revert the task move if update fails
          transferArrayItem(event.container.data, event.previousContainer.data, event.currentIndex, event.previousIndex);
        }
      );
    }
  }

  getContainerStatus(containerId: string): 'to do' | 'in progress' | 'done' {
    switch (containerId) {
      case 'toDoList':
        return 'to do';
      case 'inProgressList':
        return 'in progress';
      case 'doneList':
        return 'done';
      default:
        return 'to do';
    }
  }

  addTask(): void {
    if (this.projectId && this.newTaskTitle) {
      const newTask: Task = {
        title: this.newTaskTitle,
        status: 'to do',
        project: this.projectId,
        isImportant: false // Initialiser à faux par défaut
      };
      this.taskService.createTask(newTask).subscribe(
        (task) => {
          this.toDo.push(task);
          this.newTaskTitle = ''; // Clear the input field after adding the task
        },
        (error) => {
          console.error('Failed to create task:', error);
        }
      );
    } else {
      alert("Veuillez entrer l'ID du projet et le titre de la tâche.");
    }
  }

  deleteTask(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        this.toDo = this.toDo.filter((task) => task._id !== taskId);
        this.inProgress = this.inProgress.filter((task) => task._id !== taskId);
        this.done = this.done.filter((task) => task._id !== taskId);
      },
      (error) => {
        console.error('Failed to delete task:', error);
      }
    );
  }

  // Méthode pour basculer l'importance d'une tâche
  toggleImportant(task: Task): void {
    task.isImportant = !task.isImportant;
    this.taskService.updateTask(task._id!, task).subscribe(
      () => {
        console.log('Task importance toggled successfully');
      },
      (error) => {
        console.error('Failed to toggle task importance:', error);
      }
    );
  }
}
