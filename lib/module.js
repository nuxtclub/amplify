import path from 'path'

export default function(moduleOptions) {
	const options = Object.assign({}, this.options.amplify, moduleOptions)

	if (!options.awsconfig) {
		throw '@nuxtclub/amplify: awsconfig is missing.\n\n 📚 If you do not know how to configure the module, read the following guide:\n https://github.com/nuxtclub/amplify#readme'
	} else {
		options.awsconfig = JSON.stringify(options.awsconfig)
	}

	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		mode: 'client',
		options,
	})
}

module.exports.meta = require('../package.json')
