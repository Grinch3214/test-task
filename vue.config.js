const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	publicPath: process.env.NODE_ENV === "production" ? "/balance-list/" : "/",
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/assets/styles/style.scss";'
			}
		}
	}
})
