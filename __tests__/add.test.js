var Application = require('spectron').Application

let app = new Application({
  path: 'dist/win-unpacked/temperature-converter.exe'
})

const BACKSPACE_UNICODE = "\uE003";

describe('application launch', function () {
	beforeEach(function () {
		return app.start()
	})

	afterEach(function () {
		if (app && app.isRunning()) {
		 	return app.stop()
		}
	})

	it('shows an initial window', function () {
    	return app.client.getWindowCount().then(function (count) {
      		expect(count).toBe(1)
    	})
  	})

  	it('gives celsius 0 first time', function(done){
  		app.client.getValue('#celsius-input').then((value) => {
  			expect(parseFloat(value)).toBe(0)
  			done()
  		})	
  	})

	test('celsius-input -80 gives fahrenheit-input -112', function(done) {
		app.client
		.clearElement('#celsius-input')
		.setValue('#celsius-input', -80)
		.click('#fahrenheit-input')
		.getValue('#fahrenheit-input').then(function (value) {
			expect(parseFloat(value)).toBe(-112)
			done()
		})
	})

	test('celsius-input -14 gives fahrenheit-input 57.2', function(done) {
		app.client
		.clearElement('#celsius-input')
		.setValue('#celsius-input', 14)
		.click('#fahrenheit-input')
		.getValue('#fahrenheit-input').then(function (value) {
			expect(parseFloat(value)).toBe(57.2)
			done()
		})
	})

	test('fahrenheit-input 0 gives celsius-input -17.77', function(done) {
		app.client
		.clearElement('#fahrenheit-input')
		.setValue('#fahrenheit-input', 0)
		.click('#celsius-input')
		.getValue('#celsius-input').then(function (value) {
			expect(parseFloat(value)).toBe(-17.78)
			done()
		})
	})

	test('fahrenheit-input empty gives celsius-input empty', function(done) {
		app.client
		.clearElement('#fahrenheit-input')
		.click('#celsius-input')
		.getValue('#celsius-input').then(function (value) {
			expect(value).toBe('')
			done()
		})
	})

})