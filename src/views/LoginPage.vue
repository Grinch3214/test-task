<template>
	<section class="business">
		<div class="business__top">
			<div class="container">
				<h2 class="business__title">Welcome to <br> Business Analytics Online</h2>
			</div>
		</div>

		<div class="business__analitics analitics container">
			<div class="analitics__container">
				<p class="analitics__container-txt"><span>Business Analytics</span> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
				<ul class="analitics__list">
					<li 
						class="analitics__item"
						v-for="(item, index) in listItem"
						:key="index"
					>
						<h4 class="analitics__item-title">{{ item.title }}</h4>
						<p class="analitics__item-text">{{ item.text }}</p>
					</li>
				</ul>
			</div>
			<div class="analitics__form">
				<sign-in />
			</div>
		</div>
	</section>
</template>

<script>
import SignIn from '@/components/SignIn.vue'

export default {
  components: { SignIn },
  name: 'LoginPage',
	data:() => ({
		listItem: [
			{
				title: 'Interactive Reporting',
				text: 'In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.'
			},
			{
				title: 'Automated data updates',
				text: 'The application automatically updates and structures the data in just 60 seconds, saving you time and money.'
			},
			{
				title: 'Data Security',
				text: 'The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.'
			}
		],
	}),
}
</script>

<style lang="scss">
.business {
	padding-bottom: 20px;
	&__top {
		background: url('../assets/images/background.jpg') 0 0/cover no-repeat;
		min-height: 330px;
		display: flex;  
		align-items: center;
		padding-bottom: 0px;
		color: #fff;
		@media (min-width: 991.98px) {
			min-height: 400px;
			padding-bottom: 70px;
			align-items: flex-end;
		}
		@media (min-width: 1199.98px) {
			min-height: 457px;
		}
	}
	&__title {
		font-size: 30px;
		line-height: 40px;
		text-align: center;
		@media (min-width: 575.98px) {
			font-size: 40px;
			line-height: 55px;
			text-align: left;
		}
		@media (min-width: 1199.98px) {
			font-size: 55px;
			line-height: 86px;
		}
	}
}

.analitics {
	display: flex;
	flex-wrap: wrap;
	@media (min-width: 767.98px) {
		flex-wrap: nowrap;	
	}
	&__container {
		flex: 1 1 100%;
		padding-right: 0px;
		order: 2;
		@media (min-width: 767.98px) {
			flex: 1 1 50%;
			padding-right: 10px;
			order: 1;
		}
	}
	&__container-txt {
		margin-top: 40px;
		span {
			font-weight: 500;
		}
	}
	&__list {
		margin-top: 15px;
	}
	&__item {
		padding-left: 26px;
		margin-bottom: 15px;
		position: relative;
		@media (min-width: 991.98px) {
			padding-left: 36px;
		}
		&::before {
			content: '';
			position: absolute;
			top: 4px;
			left: 0;
			width: 16px;
			height: 11px;
			background: url('../assets/images/check_list.svg') 0 0/cover no-repeat;
			@media (min-width: 991.98px) {
				width: 23px;
				height: 17px;
			}
		}
	}
	&__item-title {
		font-weight: 500;
		margin-bottom: 0;
		@media (min-width: 767.98px) {
			margin-bottom: 10px;
		}
	}
	&__item-text {
		font-size: 14px;
	}

	&__form {
		flex: 1 1 100%;
		text-align: center;
		order: 1;
		margin-top: 28px;
		@media (min-width: 767.98px) {
			flex: 1 1 50%;
			text-align: right;
			order: 2;
			margin-top: 0;
		}
	}
}
</style>
