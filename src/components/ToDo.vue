<template>
	<div class="todos">

		<div class="todos__form">
			<input
        v-model="newTodo"
        type="text"
        placeholder="Enter To Do"
        class="todos__form-input"
      />
      <button
				type="submit"
				class="todos__form-btn"
				@click="addTodo()"
			>
        +
      </button>
		</div>

		<div
			v-for="(todo, index) in todos"
			:key="index"
			class="todos__list"
		>
			<div class="todos__container">
				<div class="todos__header">
					<div
						class="todos__status"
						:class="{
              'status-todo': todo.status === 'to-do',
              'status-waiting': todo.status === 'waiting',
              'status-finished': todo.status === 'finished',
            }"
						@click="changeStatus(index)"
					>
						{{ todo.status }}
					</div>
					<div class="todos__button">
						<div class="todos__button-arrow-up" @click="upTodo(index)">
						</div>
						<div class="todos__button-arrow-down" @click="downTodo(index)">
						</div>
						<div class="todos__button-edit" @click="editTodo(index)">
						</div>
						<div class="todos__button-trash" @click="deleteTodo(index)">
						</div>
					</div>
				</div>
				<div class="todos__item">
					<p :class="{ 'todo-finished': todo.status === 'finished' }">
						{{ todo.name }}
					</p>
				</div>
      </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ToDo',
	data:() => ({
		newTodo:'',
    indexEditTodo: null,
    tempNameTodo: '',
    tempStatusTodo: '',
    todoStatus: ["to-do", "waiting", "finished"],
    todos: [
      // {
      //   name: "Task number one",
      //   status: "to-do",
      // },
      // {
      //   name: "Task number two",
      //   status: "finished",
      // },
      // {
      //   name: "Task nomber three",
      //   status: "waiting",
      // },
    ],
	}),
	methods: {
		addTodo() {
			if (!this.newTodo.length) return;

			if (this.indexEditTodo === null) {
				this.todos.unshift({
					name: this.newTodo,
					status: 'to-do',
				})
			} else {
				this.todos[this.indexEditTodo].name = this.newTodo;
        this.indexEditTodo = null;
			}
			this.newTodo = ''

			let todo = JSON.stringify(this.todos)
			localStorage.setItem('to-do-list', todo)
		},
		editTodo(index) {
      this.newTodo = this.todos[index].name;
      this.indexEditTodo = index;

			let todo = JSON.stringify(this.todos)
			localStorage.setItem('to-do-list', todo)
    },
		deleteTodo(index) {
      this.todos.splice(index, 1);

			let todo = JSON.stringify(this.todos)
			localStorage.setItem('to-do-list', todo)
    },
		changeStatus(index) {
      let statusIndex = this.todoStatus.indexOf(this.todos[index].status);
      if (++statusIndex > 2) statusIndex = 0;
      this.todos[index].status = this.todoStatus[statusIndex];

			let todo = JSON.stringify(this.todos)
			localStorage.setItem('to-do-list', todo)
    },
		upTodo(index) {
      if (index === 0) return;

      this.tempNameTodo = this.todos[index].name;
      this.tempStatusTodo = this.todos[index].status;

      this.todos[index].name = this.todos[index - 1].name;
      this.todos[index].status = this.todos[index - 1].status;

      this.todos[index - 1].name = this.tempNameTodo;
      this.todos[index - 1].status = this.tempStatusTodo;
    },
    downTodo(index) {
      if (index === this.todos.length - 1) return;

      this.tempNameTodo = this.todos[index].name;
      this.tempStatusTodo = this.todos[index].status;

      this.todos[index].name = this.todos[index + 1].name;
      this.todos[index].status = this.todos[index + 1].status;

      this.todos[index + 1].name = this.tempNameTodo;
      this.todos[index + 1].status = this.tempStatusTodo;
    },
	},
	mounted() {
		let localTodo = localStorage.getItem('to-do-list');
		if (!localTodo) return
		this.todos = JSON.parse(localTodo);
	}
}
</script>

<style lang="scss">
.todos {
	padding: 40px;
	max-width: 800px;
	margin: 0 auto;

	&__form {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	&__form-input {
		width: 100%;
		padding: 10px 25px;
		background: #f1f1f1;
		border-radius: 20px;
		border: 1px solid $primary-color;
	}
	&__form-btn {
		flex-shrink: 0;
		width: 36px;
		height: 36px;
		font-size: 20px;
		margin-left: 15px;
		border-radius: 50%;
		background: $second-color;
		color: #fff;
	}
	&__list {
		text-align: left;
		border-radius: 20px;
		box-shadow: 1px 1px 7px -1px $primary-color;
	}
	&__container {
		margin-bottom: 10px;
		padding: 6px 12px;
	}
	&__header {
		display: flex;
		text-align: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}
	&__status {
		position: relative;
		font-weight: 700;
		padding-left: 12px;
	}

	&__item {
	}

	&__button {
		display: flex;
		div {
			width: 25px;
			height: 25px;
			margin-left: 15px;
			cursor: pointer;
		}
	}
	&__button-arrow-up {
		background: url('../assets/images/arrow_up.svg') 0 0/cover no-repeat;
	}
	&__button-arrow-down {
		background: url('../assets/images/arrow_down.svg') 0 0/cover no-repeat;
	}
	&__button-edit {
		background: url('../assets/images/app_registration.svg') 0 0/cover no-repeat;
	}
	&__button-trash {
		background: url('../assets/images/delete.svg') 0 0/cover no-repeat;
	}

	.status-todo,
	.status-waiting,
	.status-finished {
		color: #D60000;
		&::before {
			content: '';
			position: absolute;
			top: 10px;
			left: 0;
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background: #D60000;
		}
	}
	.status-waiting {
		color: $second-color;
		&::before {
			background: $second-color;
		}
	}
	.status-finished {
		color: #058800;
		&::before {
			background: #058800;
		}
	}
}
.todo-finished {
	font-style: italic;
	text-decoration: line-through;
}
</style>