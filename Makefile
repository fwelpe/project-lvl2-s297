giinstall:
	npm install

publish:
	npm publish

lint:
	npm run eslint .

lintjson:
	npm run eslint --format json .

test:
	npm test

gdfjson:
	npm run babel-node -- src/bin/gendiff.js /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before.json /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after.json

gdfjson2:
	npm run babel-node -- src/bin/gendiff.js /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before2.json /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after2.json

gdfjsonjson:
	npm run babel-node -- src/bin/gendiff.js --format json /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before2.json /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after2.json > 1.json

gdfjspl:
	npm run babel-node -- src/bin/gendiff.js --format plain /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before2.json /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after2.json

gdfyml:
	npm run babel-node -- src/bin/gendiff.js /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before.yml /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after.yml

gdfyml2:
	npm run babel-node -- src/bin/gendiff.js /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before2.yml /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after2.yml

gdfyml2plain:
	npm run babel-node -- src/bin/gendiff.js --format plain /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before2.yml /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after2.yml

gdfini:
	npm run babel-node -- src/bin/gendiff.js /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before.ini /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after.ini

gdfini2:
	npm run babel-node -- src/bin/gendiff.js /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/before2.ini /home/fwlpe/project-lvl2-s297/__tests__/__fixtures__/after2.ini

tmp:
	npm run babel-node -- tmp.js
