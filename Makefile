giinstall:
	npm install

publish:
	npm publish

lint:
	npm run eslint .

test:
	npm test

gdfjson:
	npm run babel-node -- src/bin/gendiff.js /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before.json /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after.json

gdfyml:
	npm run babel-node -- src/bin/gendiff.js /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before.yml /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after.yml


tmp:
	npm run babel-node -- tmp.js
