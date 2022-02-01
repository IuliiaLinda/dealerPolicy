
const { path } = require("chromedriver");
import expected from './../../data/expected.json'

describe( 'SMOKE TEST', () => {
    before(( )  => {
        browser.maximizeWindow();
        browser.url('/');
    })
     it ( 'Should verify Home page ',  () => {
         const muiButton = '//button[@type="button"][1]';
         $(muiButton).click();
         const firstNameField = '#firstName';
         expect($(firstNameField).getText()).toHaveText('First Name');
          
     });
     it ('01-Should verify input field first and last name IF accept valid data', () => {
         const firstName = 'Tylor';
         const firstNameField = '#firstName';
         expect ( $  (firstNameField).setValue(firstName));
         
     })
     it ('02-Should verify input field first and last name IF accept valid data', () => {
        const lastName = 'Mayfield';
        const lastNameField = '#lastName';
        expect($(lastNameField).setValue(lastName));
    })
    it ('03-Should verify input field first and last name IF accept valid data', () => {
        const  muiButtonSubmit = '//button[@type="submit"]';
        $(muiButtonSubmit).click();
    })
    it ( 'Should verify  Gender button Male ',  () => {
        const maleButton = '//button[@type="button"][1]';
        $(maleButton).click();
    })   
    it ( 'Should verify  Marital-status button Single ',  () => {
        const singleButton = '//button[@type="button"][1]';
        $(singleButton).click();
    })   
    it ('01-Should verify input field Date of Birth IF accept valid data', () => {
        const dateOfBirth = '03/24/1993';
        const dateOfBirthField = '#dateOfBirth';
        expect($(dateOfBirthField).setValue(dateOfBirth));
    })
    it ( '02-Should verify input field Date of Birth IF accept valid data',  () => {
        const continueButton = '//button[@type="button"][1]';
        $(continueButton).click();
    })
    it ('01-Should verify input field Address IF accept valid data', () => {
        const street = '27 Green Mountain  Drive';
        const streetField = '#streetAddress';
        expect($(streetField).setValue(street));
    })
    it ('02-Should verify input field Address IF accept valid data', () => {
        const city = 'South Burlington';
        const cityField = '#city';
        expect($(cityField).setValue(city));
    })
    it ( '03-Should verify input field Address IF accept valid data',  () => {
        const stateButton = '#mui-component-select-state';
        $(stateButton).click();
        const stateVTButton = '//div[@id="menu-state"]/div[3]/ul[1]/li[47]';
        $(stateVTButton).click();
    })
    it ('04-Should verify input field Address IF accept valid data', () => {
        const zipCode = '05403';
        const zipCodeField = '#zipCode';
        expect($(zipCodeField).setValue(zipCode));
    })
    it ( '05-Should verify input field Address IF accept valid data',  () => {
        const continueButton = '//button[@type="submit"]';
        $(continueButton).click();
    })
    it ( '01-Should verify button Ownership IF accept valid data',  () => {
        const ownButton = '//button[@type="button"][1]';
        $(ownButton).click();
    })
    it ( '01-Should verify button Claim IF accept valid data',  () => {
        const noButton = '//button[@type="button"][1]';
        $(noButton).click();
    })

});
