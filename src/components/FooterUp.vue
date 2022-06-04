<template>
  <footer class="footer">
    <div class="container">
			<div class="footer__container">
				<div class="footer__logo">
					<img width="56" height="35" :src="require('../assets/logo.svg')" alt="footer logo">
				</div>
				<ul class="footer__list">
					<li 
						class="footer__item"
						v-for="(item, index) in itemList"
						:key="index"
					>
						<a :href="item.link" class="footer__link">{{ item.txt }}</a>
					</li>
				</ul>
			</div>
			<div class="footer__copyright">
				Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
			</div>
		</div>
  </footer>
</template>

<script>
export default {
  name: 'FooterUp',
	data:() => ({
		itemList: [
			{
				txt: 'Terms & Conditions',
				link: '#'
			},
			{
				txt: 'Privacy',
				link: '#'
			},
			{
				txt: 'Notice at Collection',
				link: '#'
			},
			{
				txt: 'CA Privacy Hub',
				link: '#'
			},
			{
				txt: 'Contact Us',
				link: '#'
			},
			{
				txt: 'Sitemap',
				link: '#'
			}
		],
	})
}
</script>

<style lang="scss">
.footer {
	background: $primary-color;
	color: #fff;
	font-weight: 500;
		&__container {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			padding: 0;
			border-bottom: 1px solid #fff;
			@media (min-width: 575.98px) {
				padding: 20px 0;
			}
			@media (min-width: 767.98px) {
				flex-wrap: nowrap;
				justify-content: space-between;
			}
		}

		&__logo {
			margin-bottom: 20px;
			margin-top: 20px;
			text-align: center;
			flex: 1 1 100%;
			@media (min-width: 767.98px) {
				text-align: left;
				margin: 0;
				flex: 1 1 auto;
			}
		}

		&__list {
			display: flex;
			font-size: 14px;
			flex-wrap: wrap;
			text-align: center;
			@media (min-width: 575.98px) {
				font-size: 12px;
				text-align: left;
			}
			@media (min-width: 767.98px) {
				font-size: 14px;
			}
			@media (min-width: 991.98px) {
				font-size: 16px;
			}
		}

		&__item {
			margin-left: 0;
			flex: 1 1 100%;
			margin-bottom: 10px;
			&:first-child {
				margin-left: 0;
			}
			@media (min-width: 575.98px) {
				flex: 1 1 auto;
				margin-left: 20px;
			}
		}

		&__link {
			color: #fff;
			transition: all .3s ease;
			&:hover {
				color: antiquewhite;
			}
		}

		&__copyright {
			padding: 20px 0;
			font-size: 13px;
			text-align: center;
			@media (min-width: 767.98px) {
				padding: 30px 0;
				font-size: 14px;
				text-align: left;
			}
			@media (min-width: 991.98px) {
				font-size: 16px;
			}
		}
}
</style>
