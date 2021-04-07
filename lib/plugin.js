import Amplify from 'aws-amplify'
import * as amplify from 'aws-amplify'

<% if (options.components) { %>
import '@aws-amplify/ui-vue'
<% } %>

export default function(_, inject) {
	const config = JSON.parse('<%= options.awsconfig %>')
	Amplify.configure(config)

	inject('amplify', amplify)
}
