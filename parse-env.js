module.exports = function(env) {
	switch(env) {
		case 'browser':
			return require('parse');
		case 'node':
			return require('parse/node');
		case 'react-native':
			return require('parse/react-native');
		default:
			return require('parse');		
	}
}
