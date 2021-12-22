const calculateSquare = require('../testingCallBack');
const expect = require('chai').expect;



describe('calculateSquare', function(){
        it('should return 4 if passed 2', function(done){
            calculateSquare(4, function(error, result) {
                console.log('callback testing');
                expect(result).to.equal(16);
                done();
              
            })
        })


})