function evenDigitsOnly(number) {
    //  write code here.
}



/**
* Test Suite 
*/
describe('evenDigitsOnly()', () => {
    it('returns true when all digits are even', () => {
        // arrange
        const nums = 248622;
        
        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 1 : ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns fale when any digits are odd', () => {
        // arrange
        const nums = 642386;
        
        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 2 : ", result);
        
        // assert
        expect(result).toBe(false);
    });
});