package com.todo.TodoList.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.TodoList.dto.TaskDto;
import com.todo.TodoList.Service.TaskService;

import lombok.AllArgsConstructor;


@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/todo/tasks")
public class TaskController {
	// Dependency injection
	private TaskService taskService;

	// Build Add task Rest API;
	@PostMapping 
	public ResponseEntity<TaskDto> createTask(@RequestBody TaskDto taskDto) {
		TaskDto savedtask = taskService.createTask(taskDto);
		return new ResponseEntity<>(savedtask, HttpStatus.CREATED);
	}

	// Build Get task Rest API;
	@GetMapping("{id}")
	public ResponseEntity<TaskDto> getTaskById(@PathVariable("id") Long taskId) {
		TaskDto taskDto = taskService.getTaskById(taskId);
		return ResponseEntity.ok(taskDto);
	}

	// Build Get All task REST API
	@GetMapping
	public ResponseEntity<List<TaskDto>> getAllTasks() {
		List<TaskDto> tasks = taskService.getAllTasks();
		return ResponseEntity.ok(tasks);
	}

	@PutMapping("{id}")
	public ResponseEntity<TaskDto> updateTask(@PathVariable("id") Long taskId, @RequestBody TaskDto updatedTask) {
		TaskDto taskDto = taskService.updateTask(taskId, updatedTask);
		return ResponseEntity.ok(taskDto);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteTask(@PathVariable("id") Long taskId) {
		taskService.deleteTask(taskId);
		return ResponseEntity.ok("Task deleted successfully");
	}

}