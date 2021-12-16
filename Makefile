install:
	npm ci
brain-games:
	node bin/brain-games.js
barin-even:
	node bin/barin-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .