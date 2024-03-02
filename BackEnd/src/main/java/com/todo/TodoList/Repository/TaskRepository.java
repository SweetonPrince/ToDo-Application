package com.todo.TodoList.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo.TodoList.Entity.Task;

@Repository
public interface TaskRepository  extends JpaRepository<Task, Long> {

}
