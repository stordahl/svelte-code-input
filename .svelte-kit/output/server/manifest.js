export const manifest = {
	appDir: "internal",
	assets: new Set(["favicon.png","images/github.png","images/npm.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-9a0655ab.js","js":["start-9a0655ab.js","chunks/vendor-c78b13c5.js"],"css":[]},
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
