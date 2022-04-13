# Todo

My todo app written in nextjs.  
https://zzyyxxww.github.io/todo/

### Good
* Simple/lightweight
* Does not require login (uses localstorage)
* Has dragging/simple key combinations
* Can create multiple documents (groups of tasks)
* Minimal design but is pretty and has animations
* Works in mobile

### Bad
* Does not sync between devices
* Can't select text of multiple tasks at once
* Does not have backup/hydrate functionality (yet)
* Checking behaviour can be annoying

## Behaviour

* The indent of a task can increased/decreased via controls
* A task has a child if the next task to it (as in, in the next line) has bigger indent than aforementioned task
* When marking a task as checked, it is moved as last sibling
* Moving tasks also moves its children
* Focus mode makes visible only the current task, its parents, its children, and its previous sibling and next sibling (without showing their children)

## Controls

* Switch tasks by using the `up/down arrow`
* Delete task by pressing `backspace` when task text is empty
* Toggle checkmark of task with `ctrl+enter` when its text is focused
* Add indent with `tab`, dedent with `shift+tab`, or drag checkbox left/right
* Move tasks by dragging checkbox up/down or using `ctrl+(up/down arrow)`
* Enter focus mode with `ctrl+shift+f`
