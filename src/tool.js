import mixpanel from 'mixpanel-browser';

export function init(token) {
	mixpanel.init(token, { debug: true });
}

export function initWithEUServers(token) {
	mixpanel.init(
		token,
		{
			api_host: "https://api-eu.mixpanel.com"
		}
	);
}

export function trackEvents(name, props) {
	mixpanel.track(name, props);
}

export function identifyLoggedInUser(userId) {
	mixpanel.identify(userId);
}

export function identifySignedUpUser(userId) {
	mixpanel.alias(userId);
}

export function setUserWithProperties(userId, props) {
	mixpanel.identify(userId);
	mixpanel.people.set(props);
}

export function writeText(text) {
	console.log(text);
}

function register(props) {
	mixpanel.register(props);
}

function registerOnce(props) {
	mixpanel.register_once(props);
}
