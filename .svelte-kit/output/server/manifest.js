export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/github.png","images/npm.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-4f4e40e7.js","js":["start-4f4e40e7.js","chunks/vendor-c78b13c5.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
