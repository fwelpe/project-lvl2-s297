install:
	npm install

publish:
	npm publish

lint:
	npm run eslint .

test:
	npm test

gendiff:
	npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/before.json __tests__/__fixtures__/after.json
