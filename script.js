import http from 'k6/http';

export let options = {
	scenarios: {
		endpoint: {
			executor: 'ramping-arrival-rate',
			startRate: 50,
			timeUnit: '1s',
			preAllocatedVUs: 1,
			maxVUs: 100,
			stages: [
				{ target: 1000, duration: '3m' },
				{ target: 2000, duration: '3m' },
				{ target: 5000, duration: '3m' },
			],
		},
	},
};

export default function () {
	http.get('http://localhost:8080/');
}
