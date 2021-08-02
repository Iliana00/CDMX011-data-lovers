import {
  filteredDir, filteredProd, order } from '../src/data.js';
import { unordered, dirMiyazaki, dirTakahata, prodMiyazaki, prodTakahata, scoreAsc, scoreDesc, yearDesc, yearAsc, orderAZ, orderZA } from './data/order.js'

describe('directorFiltrado', () => {
  it('debería ser una función', () => {
    expect(typeof filteredDir).toBe('function');
  });
    it('debería retornar un arreglo filtrado por Miyazaki', () => {
      expect(filteredDir(unordered, "Hayao Miyazaki")).toEqual(dirMiyazaki);
    });
    it('debería retornar un arreglo filtrado por Takahata', () => {
      expect(filteredDir(unordered, "Isao Takahata")).toEqual(dirTakahata); 
    });
});

describe('productorFiltrado', () => {
  it('debería ser una función', () => {
    expect(typeof filteredProd).toBe('function');
  });
    it('debería retornar un arreglo filtrado para el productor Miyazaki', () => {
      expect(filteredProd(unordered, 'Hayao Miyazaki')).toEqual(prodMiyazaki); 
    });
    it('debería retornar un arreglo filtrado por Takahata', () => {
      expect(filteredProd(unordered, 'Isao Takahata')).toEqual(prodTakahata); 
    });
});

describe('order', () => {
  it('debería ser una función', () => {
    expect(typeof order).toBe('function');
  });
  it('debería retornar un arreglo ordenado por calificación en orden ascendente', () => {
    expect(order(unordered, "score", "asc")).toEqual(scoreAsc);
  });
  it('debería retornar un arreglo ordenado por calificación en orden descendente', () => {
    expect(order(unordered, "score", "desc")).toEqual(scoreDesc);
  });
  it('debería retornar un arreglo ordenado por año en orden descendente', () => {
    expect(order(unordered, "year", "desc")).toEqual(yearDesc);
  })
  it('debería retornar un arreglo ordenado por año en orden ascendente', () => {
    expect(order(unordered, "year", "asc")).toEqual(yearAsc);
  });
  it('debería retornar un arreglo ordenado por orden alfabético(A-Z)', () => {
    expect(order(unordered, "title", "desc")).toEqual(orderAZ);
  })
  it('debería retornar un arreglo ordenado por orden alfabético(Z-A)', () => {
    expect(order(unordered, "title", "asc")).toEqual(orderZA);
  })
  test('debería retornar un error', () => {
    expect(() => order()).toThrow('something went wrong');
  })
})




  

