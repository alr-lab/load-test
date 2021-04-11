import http from 'k6/http';

export let options = {
	scenarios: {
		foo: {
			executor: 'ramping-arrival-rate',
			exec: 'foo',
			startRate: 50,
			timeUnit: '1m',
			preAllocatedVUs: 1,
			maxVUs: 100000,
			stages: [
				{ target: 1000, duration: '3m' },
				{ target: 10000, duration: '3m' },
				{ target: 100000, duration: '3m' },
			],
		},
		bar: {
			executor: 'constant-arrival-rate',
			exec: 'bar',
			rate: 10000,
			duration: '5m',
			timeUnit: '1s',
			preAllocatedVUs: 1,
			maxVUs: 100000,
		},
	},
};

export function foo() {
	http.get('http://localhost:8080/foo');
}

export function bar() {
	http.get('http://localhost:8080/bar');
}