//Examples testing wit Jets
//it === test

var pruebaNull = null;
var pruebaUndefined = undefined;
var pruebaDefined = true;


const sum = require('./sum.js');
it('should return 8 if adding 3 and 5', ()=>{
    //console.log (expect(sum(3, 5)));
    expect(sum(3, 5)).toBe(8);
});

it('should always pass' , ()=>{
    expect(true).toBe(true);
})

describe('tests con nombres inservibles', ()=>{ //describe agrupa los tests 
it('should return a', () =>{ 
expect(2).toBe(2);});
 describe('subnivel de agrupacion',() =>{   //agrupa en sub nivel
it('should return b', ()=> {
expect({a: 1}).toBe(2)})
 });
it('should return b', ()=>{ 
expect({a: 1}).toBe({a: 1});});
it('should return b', ()=>{ 
expect({a: 1}).toStrictEqual({a: 1});});
it('should return c', ()=>{ 
expect([1,2,3]).toEqual([1,2,3]);
    });
});


it('should pass if variable is equal to null', ()=>{ 
    expect(pruebaNull).toBe(null);
});

it('should pass if variable is equal to null', ()=>{ 
    expect(pruebaNull).toBeNull();
    expect(pruebaUndefined).toBeUndefined();
    expect(pruebaUndefined).toBeUndefined(a);
    expect(pruebaDefined).toBeefined();
});
it('should pass if variable is equal to null', ()=>{ 
    expect(pruebaDefined).toBeDefined();
});

  // toBeFalsy --> opposite
it('toBeTruthy', () => {
    expect(true).toBeTruthy();
    expect(2).toBeTruthy();
    expect('Franco').toBeTruthy();
    expect([]).toBeTruthy();
    expect([1,2,3]).toBeTruthy();
    expect({}).toBeTruthy();
    expect({a: 1}).toBeTruthy();
    // expect(0).toBeTruthy();
    // expect('').toBeTruthy();
    // expect(undefined).toBeTruthy();
    // expect(null).toBeTruthy();
  });

  it('toBeFalsy', () => {
    expect(true).toBeFalsy();
    expect(2).toBeFalsy();
    expect('Franco').toBeFalsy();
    expect([]).toBeFalsy();
    expect([1,2,3]).toBeFalsy();
    expect({}).toBeFalsy();
    expect({a: 1}).toBeFalsy();
    // expect(0).toBeFalsy();
    // expect('').toBeFalsy();
    // expect(undefined).toBeFalsy();
    // expect(null).toBeFalsy();
  });
  it('toBeCloseTo', () => {
     //expect(0.1 + 0.2).toEqual(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3);
     //expect(0.11).toBeCloseTo(0.1);
    expect(0.11).toBeCloseTo(0.1, 1);
    expect(0.174927142).toBeCloseTo(0.17492, 4);
  });

  it('toMatch', () => {
    expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch('Franco');
    expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch(/Franco/);
    expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch(/palabras$/
  });
  
  it('toContain', () => {
    const array = ['Franco', 'Toni', 'Martu', 'Mati'];  //para arreglos
    expect(array).toContain('Martu');
    expect(array).not.toContain('Diego');
    expect('Soy Henry').toContain('Henry');
  });

  // also used as .toThrowError
it('toThrow', () => {
    function error() {
      throw new TypeError('An error');
    }
    // function definition, not executed!
    expect(error).toThrow();
    expect(error).toThrow('An error');
    //expect(error).toThrow('An errorrrrs');
    expect(error).toThrow('error');
    expect(error).toThrow(/error$/);
    expect(error).toThrow(TypeError);
    // expect(error).toThrow(SyntaxError);
    expect(error).toThrow(new TypeError('An error'));
  });
  function henry(str){
    if(typeof str != 'string') throw new TypeError ('debe ser string');
    return str + '!';
}

console.log(henry('Adri'));
//console.log(henry([1,2,3]));