import React, { useContext, useState } from 'react';
import { TodoContext } from '../../store/TodoContext';
import { List, ListItem, ListItemText, Switch, IconButton } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import CustomSwitch from '../CustomSwitch/CustomSwitch';
import iconExpand from '../../../public/expand.svg';
import styles from './TodoList.module.css';
import Image from 'next/image';



const TodoList: React.FC = () => {
    const { todos, toggleTodo } = useContext(TodoContext);

    return (
        <div className={styles.wrapper}>
            {Object.entries(todos).map(([day, dayTodos]) => (
                <Accordion key={day} className={styles.task}>
                    <AccordionSummary className={styles.day_title}>
                        <span className={styles.day_name}>{day}</span>
                        <IconButton>
                            <Image src={iconExpand} alt="expand" />
                        </IconButton>
                    </AccordionSummary>

                    <AccordionDetails>
                        <List className={styles.list}>
                            {dayTodos.map(todo => (
                                <ListItem
                                    key={todo.id}
                                    className={`${styles.task_item} ${todo.priority === 'first' ? styles.first : todo.priority === 'second' ? styles.second : styles.third}`}
                                >
                                    <div className={styles.task_wrapper}>
                                        <ListItemText primary={todo.title} className={`${styles.task_title} ${todo.completed === true ? styles.done : ''}`} />
                                        <ListItemText primary={todo.text} className={styles.task_text} />
                                    </div>
                                    <CustomSwitch
                                        checked={todo.completed}
                                        onChange={() => toggleTodo(day, todo.id)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />

                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>

            ))}
        </div>
    );
};

export default TodoList;
