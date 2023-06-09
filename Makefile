install:
	npm ci

hexpet:
	node index.js

publish:
	npm publish --dry-run

lint:
	./node_modules/.bin/eslint .
