import React, { Component } from 'react';

class Tugas extends Component {
  processData = () => {
    // Contoh variabel dengan let, const, dan var
    let a = 'Nilai variabel let';
    const b = 'Nilai variabel const';
    var c = 'Nilai variabel var (hindari penggunaan var)';

    // Penggunaan array method
    const data = [1, 2, 3, 4, 5];
    const doubledData = data.map(item => item * 2);

    const products = [
     { id: 1, name: 'Product A', price: 100 },
     { id: 2, name: 'Product B', price: 150 },
     { id: 3, name: 'Product C', price: 200 },
   ];

    return {
     a,
     b,
     c,
     originalData: data,
     doubledData,
     products,
   };
  };

  render() {
   const processedData = this.processData();

    return (
      <div>
        <p>{processedData.a}</p>
        <p>{processedData.b}</p>
        <p>{processedData.c}</p>
        Data Awal : {processedData.originalData[0]};
        Data Hasil penggandaan : {processedData.doubledData[0]};

        
        <h2>Product List</h2>
        <ul>
          {processedData.products.map(({ id, name, price }) => (
            <li key={id}>
              <strong>{name}</strong> - ${price}
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default Tugas;
