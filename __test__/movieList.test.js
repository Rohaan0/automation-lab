// we are going to start with the BOILERPLATE code

const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const {By} = require('selenium-webdriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// input the functions I want to test

const {addMovie, crossOffMovie, deleteMovie, unCrossOffMovie} = require('../functions/function.js')

// Then let's add the beforeAll and afterAll

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

// the Test

describe('manipulates the movie website', async () => {
    it('adds a movie', async () => {
        await addMovie(driver)
    })
    
    it('Crosses of a movie', async () => {
        await crossOffMovie(driver)
        await driver.sleep(2000)
    })

    it('uncrosses the movie', async  () => {
        await unCrossOffMovie(driver)
        await driver.sleep(5000)
    })

    it('deletes the movie', async () => {
        await deleteMovie(driver)
        await driver.sleep(3000)
    })

    it('checks for a notifictaion', async () => {
        expect(driver.findElement(By.xpath('//aside'))).toBeTruthy()
    })
})