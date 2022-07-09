import {products} from "../sampleData/products.json";
import React, {useState} from 'react';

function ProductCategoryRow({category}) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({product}) {
  const name = product.stocked ? product.name : <span style={{color: 'red'}}>
    {product.name} </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({products, filterText, inStockOnly}) {
  // const rows = [];
  // let lastCategory = null;
  
  // products.forEach((product) => {
  //   if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ) {
  //     // Entry
  //     // Promise
  //     return;
  //   } 
  //   if (inStockOnly && !product.stocked) {
  //     return;
  //   }
  //   if (product.category !== lastCategory) {
  //     rows.push(
  //       <ProductCategoryRow category={product.category} key={product.category} />
  //     );
  //   }
  //   rows.push(
  //     <ProductRow product={product} key={product.name} />
  //   );
  //   lastCategory = product.category;
  // });
  // {
  //   'Fruits': [{}],
  //   'Vegetables': [{},...]
  // }
  let productsGroupedByCategory = {};

  // with a for loop
  for (let product of products) {
    if (!productsGroupedByCategory[product.category]) {
      productsGroupedByCategory[product.category] = [];
    }

    productsGroupedByCategory[product.category].push(product);
  }

  // same thing as above but with `Array.prototype.reduce` (check MDN)
  // let productsWithReducer = products.reduce((accumulator, product) => {
  //   if (!accumulator[product.category]) {
  //     accumulator[product.category] = [];
  //   }
  //   accumulator[product.category].push(product);
  //   return accumulator;
  // }, {});


  // debugger
  function matchesFilters(product) {
    const matchesSearch = (string, search) => {
      return string.toLowerCase().indexOf(search.toLowerCase()) === -1
    }

    if (inStockOnly && !product.stocked) {
      return false;
    }

    return !matchesSearch(product.name, filterText);
  }

  // new way
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* {
          Object.entries returns an array like:
          [
            ["Fruits", [{product}, {product}, {product}]],
            ["Vegetables", [{product}, {product}, {product}]],
          ]
        } */}
        {Object.entries(productsGroupedByCategory).map(([category, products]) => {
          let filteredProducts = products.filter(matchesFilters);

          if (!filteredProducts.length) {
            return null;
          }

          return (
            <React.Fragment key={category}>
              <ProductCategoryRow category={category} />
              {products.filter(matchesFilters).map(product => (
                <ProductRow key={product.name} product={product}  />
              ))}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );

  // old way
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input type="text" placeholder="Search..." value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} />
      <lable>
        <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </lable>
    </form>
  );
}

function FilterableProductTable({products}) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} 
      onInStockOnlyChange={setInStockOnly} />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

export default function App() {
  return <FilterableProductTable products={products} />;
}
    
