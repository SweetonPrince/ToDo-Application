package com.todo.TodoList.Service;

import java.util.List;

import com.todo.TodoList.dto.TaskDto;

public interface TaskService {
	TaskDto createTask(TaskDto taskDto);
	
	TaskDto getTaskById(Long taskId);
	
	List<TaskDto> getAllTasks();
	
	TaskDto  updateTask(Long taskId, TaskDto updatedTask);

	void deleteTask(Long taskId);
}