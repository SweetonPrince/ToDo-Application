package com.todo.TodoList.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.todo.TodoList.dto.TaskDto;
import com.todo.TodoList.Entity.Task;
import com.todo.TodoList.Exception.ResourceNotFoundException;
import com.todo.TodoList.Mapper.TaskMapper;
import com.todo.TodoList.Repository.TaskRepository;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {
	private TaskRepository taskRepository;

	@Override
	public TaskDto createTask(TaskDto taskDto) {
		Task task = TaskMapper.maptoTask(taskDto);
		Task savedTask = taskRepository.save(task);
		return TaskMapper.maptoTaskDto(savedTask);
	}

	@Override
	public TaskDto getTaskById(Long taskId) {
		Task task = taskRepository.findById(taskId)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exists with given id : " + taskId));
		return TaskMapper.maptoTaskDto(task);
	}

	@Override
	public List<TaskDto> getAllTasks() {
		List<Task> tasks = taskRepository.findAll();
		return tasks.stream().map((task) -> TaskMapper.maptoTaskDto(task)).collect(Collectors.toList());

	}

	@Override
	public TaskDto updateTask(Long taskId, TaskDto updatedTask) {
		Task task = taskRepository.findById(taskId)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exists with a given id : " + taskId));

		task.setTitle(updatedTask.getTitle());
		task.setDescription(updatedTask.getDescription());
		task.setCompleted(updatedTask.getCompleted());
		
		taskRepository.save(task);
	    // You may need to convert Task object back to TaskDto if necessary
	    return TaskMapper.maptoTaskDto(task);
	}

	@Override
	public void deleteTask(Long taskId) {
		Task task = taskRepository.findById(taskId)
				.orElseThrow(() -> new ResourceNotFoundException("Task not found  with a given id" + taskId));
		taskRepository.deleteById(taskId);
	}
}
