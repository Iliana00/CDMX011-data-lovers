import {directorFiltrado, productorFiltrado} from '../src/data.js';
import { unordered, dirMiyazaki, dirTakahata, /*prodMiyazaki*/ } from './data/order.js'

describe('directorFiltrado', () => {
  it('debería ser una función', () => {
    expect(typeof directorFiltrado).toBe('function');
  });
    it('debería retornar un arreglo filtrado por Miyazaki', () => {
      expect(directorFiltrado(unordered, "Hayao Miyazaki")).toEqual(dirMiyazaki); 
    });
    it('debería retornar un arreglo filtrado por Takahata', () => {
      expect(directorFiltrado(unordered, "Isao Takahata")).toEqual(dirTakahata); 
    });
    /*it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });*/
});

describe('productorFiltrado', () => {
  it('debería ser una función', () => {
    expect(typeof productorFiltrado).toBe('function');
  });
    /*it('debería retornar un arreglo filtrado para el productor Miyazaki', () => {
      //const result = directorFiltrado(data, 'unordered', 'ascOrDesc')
      expect(productorFiltrado['Hayao Miyazaki']).toEqual(prodMiyazaki); 
     // console.log(expect())
    });
    /*it('debería retornar un arreglo filtrado por Takahata', () => {
      //const result = directorFiltrado(data, 'unordered', 'ascOrDesc')
      expect(directorFiltrado['Isao Takahata']).toEqual(dirTakahata); 
    });
    /*it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });*/
});




  

