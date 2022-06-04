const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	publicPath: process.env.NODE_ENV === "production" ? "/fe-21-01/max/training/test-task" : "/",
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/assets/styles/style.scss";'
			}
		}
	}
})
