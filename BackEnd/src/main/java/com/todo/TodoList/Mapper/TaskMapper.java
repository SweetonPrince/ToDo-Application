package com.todo.TodoList.Mapper;

import com.todo.TodoList.dto.TaskDto;
import com.todo.TodoList.Entity.Task;

public class TaskMapper {

	public static TaskDto maptoTaskDto(Task task) {
		return new TaskDto(task.getId(), task.getTitle(), task.getDescription(), task.getCompleted());
	}

	public static Task maptoTask(TaskDto taskDto) {
		return new Task(taskDto.getId(), taskDto.getTitle(), taskDto.getDescription(), taskDto.getCompleted());
	}

}
