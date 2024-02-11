import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function ProductDisplay() {
  const [product, setProduct] = useState();
  const [endItem, setEndItem] = useState();
  var value = '';
  function regexStorage(elem) {
    if (elem && typeof elem === 'string') {
      return elem
        .split('[')
        .join('')
        .split(']')
        .join('')
        .split('{')
        .join('')
        .split('}')
        .join('')
        .replace('/{.*?}/g', '')
        .replace(/"/g, '');
      //.replaceAll('id:', '|---🍺    -id:');
    }
  }
  useEffect(() => {
    var items = [];

    var item = (localStorage.getItem('product') + ' ').toString();
    items = item.split('},{').join(' | ');
    // console.log(
    //   'item : ',
    //   item,
    //   '   items : ',
    //   regexStorage(String(items).replace('id:', '<br>'))
    // );
    let lastItems = regexStorage(String(items));
    console.log('lastItems : ', lastItems);

    const productName = localStorage.getItem('product');
    setProduct(lastItems);
    var itemList = [];
    for (var i = 0; i < items.length; i++) {
      itemList += regexStorage(items[i]);
      //console.log('item i >> ', items[i], 'endItem = ', endItem);
    }
    // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ', endItem);
    setEndItem(itemList);
  }, [endItem, value]);

  return (
    <div className={styles.finalShoppingList}>
      {
        <textarea
          className={styles.areaItems}
          placeholder={String(endItem).split(' | ').join('\r\n')}
          defaultValue={String(endItem).split(' | ').join('\r\n')}
          value={String(endItem).split(' | ').join('\r\n')}
        ></textarea>
      }
    </div>
  );
}
