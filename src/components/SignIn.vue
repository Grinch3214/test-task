<template>
  <form class="form">
		<div class="form__input">
			<label for="user_name" class="form__input-title">Name</label>
			<input
				id="user_name"
				class="form__input-name"
				:class="{ 'error': errorUser }"
				type="text"
				v-model="username"
			>
			<p class="form__error">
				<span :class="{ 'error': errorUser }">Enter a valid name</span>
			</p>
		</div>
		<div class="form__input">
			<label for="user_password" class="form__input-title">Password</label>
			<input
				id="user_password"
				class="form__input-password"
				type="password"
				:class="{ 'error': errorPass }"
				v-model="password"
			>
			<p class="form__error">
				<span :class="{ 'error': errorPass }">Enter a valid password</span>
			</p>
		</div>
		<button-up
			:name="sign"
			@click="submitForm"
			class="form__btn"
		/>
		<div class="form__link">
			<a class="form__link-link" href="#!">Forgot Password</a>
		</div>
		<div class="form__footer">
			Register now
		</div>
	</form>
</template>

<script>
import axios from 'axios'
import ButtonUp from './ButtonUp.vue'
export default {
  components: { ButtonUp },
	name: 'SignIn',
	data:() => ({
		sign: 'LOGIN',
		errorUser: false,
		errorPass: false,
		username: '',
		password: '',
		currentUser: null,
		currentPass: null,
	}),
	methods: {
		async submitForm() {
			try {
				let result = await axios.get('https://sheetdb.io/api/v1/hoanq94287jgw');
				let data = result.data;

				for (let i = 0; i < data.length; i++) {
					if (this.username === data[i].login) {
						this.currentUser = data[i].login
						if (this.password === data[i].pass) {
							this.currentPass = data[i].pass;
							localStorage.setItem('user-info', JSON.stringify(data[i]));
							this.errorPass = false;
							this.$router.push({ path: 'todo' });
							break
						}
					}
				}

				if(!this.currentUser) {
					this.errorUser = true
				} else if (this.currentUser && !this.currentPass) {
					this.errorUser = false;
					this.errorPass = true;
				}
			} catch(e) {
				console.log('error: ', e)
			}
		}
	},
	mounted() {
		let user = localStorage.getItem('user-info');
		if(user) {
			this.$router.push({name: 'todo'})
		}
	}
}
</script>

<style lang="scss">
.form {
		text-align: left;
		display: inline-block;
		width: 100%;
		max-width: 481px;
		margin-top: -185px;
		background: #fff;
		box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
		padding: 40px 30px 0px;
		&__input {
			margin-bottom: 15px;
		}
		&__input-title {
			display: block;
			font-weight: 300;
			font-size: 18px;
		}
		input {
			width: 100%;
			max-width: 420px;
			padding: 14px 15px;
			border: 1px solid #9A9A9A;
			font-size: 18px;
			color: $primary-color;
		}
		&__input-name,
		&__input-password {
			&:focus {
				border: 1px solid #101010;
			}
			&.error {
				border: 1px solid #d60000;
			}
		}
		&__error {
			font-size: 16px;
			color: #d60000;
			min-height: 25px;
			span {
				position: relative;
				padding-left: 20px;
				display: none;
				// display: inline-block;
				&::before, &::after {
					content: '';
					position: absolute;
					top: 11px;
					left: 0;
					width: 11px;
					height: 2px;
					transform: rotate(45deg);
					background: #d60000;
				}
				&:after {
					transform: rotate(-45deg);
				}
			}
			span.error {
				display: inline-block;
			}
		}
		&__btn {
			margin-bottom: 20px;
		}
		&__link {
			text-align: center;
			margin-bottom: 20px;
		}
		&__link-link {
			color: $second-color;
			display: inline-block;
		}
		&__footer {
			padding: 17px 0;
			font-size: 25px;
			color: $primary-color;
			background: #f6f6f6;
			margin-left: -30px;
			margin-right: -30px;
			text-align: center;
		}
	}
</style>