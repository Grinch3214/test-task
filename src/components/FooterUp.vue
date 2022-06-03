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
			align-items: center;
			justify-content: space-between;
			padding: 20px 0;
			border-bottom: 1px solid #fff;
		}

		&__logo {
		}

		&__list {
			display: flex;
		}

		&__item {
			margin-left: 20px;
		}

		&__link {
			color: #fff;
			transition: all .3s ease;
			&:hover {
				color: antiquewhite;
			}
		}

		&__copyright {
			padding: 30px 0;
		}
}
</style>
