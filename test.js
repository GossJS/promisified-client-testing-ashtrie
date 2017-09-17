const Zombie = require('zombie');
const should = require('should');
const mocha = require('mocha');
const testValues = require('./testValues');

const url = 'https://katysheva.github.io/Web-tech-task';

testValues.forEach(o => {
    let requestUrl = `${url}?test=${o.value}`;
    describe(`A scottish man comes in the pub ${requestUrl}`, () => {
        const browser = new Zombie();
        const getResult = () => ({ response: browser.document.querySelector('h3#response').textContent.toLowerCase() });
        
        before(done => {
            browser.visit(requestUrl, done);
        });
    
        describe('pushes an oak damn door', () => {
    
            before(done => {
                browser.pressButton('#startBtn', done);
            });

            it('and sees how the chap takes a knife and sings "Oh, I have all my fingers\nThe knife goes chop chop chop\nIf I miss the spaces in-between my fingers will come off\nAnd if I hit my fingers\nThe blood will soon come out\nBut all the same I play this game cause that is what it is all about\nOh, chop chop chop chop chop chop\nI am picking up the speed\nAnd if I hit my fingers then my hand will start to bleed"', () => {
                getResult().should.have.property('response', o.expected);
            });
      });
    });
});