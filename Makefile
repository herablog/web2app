# paths
ESLINT = ./node_modules/eslint/bin/eslint.js
MOCHA = ./node_modules/mocha/bin/_mocha
BROWSERIFY = ./node_modules/browserify/bin/cmd.js
KARMA=./node_modules/karma/bin/karma

# test
test: eslint mocha karma

# eslint
eslint:
	$(ESLINT) -c ./.eslintrc lib/ bin/ test

# mocha
mocha:
	$(MOCHA) test/lib/** test/bin

# karma
karma:
	$(KARMA) start

# Tests for TravisCI
travistest: eslint mocha
	$(KARMA) start --single-run

# build
build: browserify riot

# browserify
browserify:
	$(BROWSERIFY) lib/web2app.js --standalone web2app -d -p [minifyify --no-map] > public/scripts/web2app.js

# riot
riot:
	riot public/views public/views/all.js
