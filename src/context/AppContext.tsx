import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext<any | null>(null);
export const AppProvider = ({ children }: any) => {
  const formatNumber = (num: number) => {
    if (num != undefined) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
  };
  const strippedString = (originalString: string) => {
    if (originalString != undefined) {
      return originalString.replace(/(<([^>]+)>)/gi, '');
    }
  };
  const [hotReload, setHotReload] = useState(false);
  const [opencart, setopencart] = useState(false);
  const [count, setcount] = useState(0);
  const [currency, setcurrency] = useState('USD');
  const [subtotal, setsubtotal] = useState(0);
  const [cartitems, setcartitems] = useState([]);
  const addtocart = (item: any) => {
    setopencart(true);
    let newitems: any = [...cartitems];
    let check = cartitems.filter(function (el: any) {
      return el.id == item.id;
    });
    if (check[0]) {
      item.count = item.count + 1;
    } else {
      item.count = 1;
      setcount(count + 1);
      newitems.push(item);
    }
    setcartitems(newitems);
    localStorage.setItem('mcart', JSON.stringify(newitems));
  };
  const removefromcart = (item: any) => {
    setopencart(true);
    let newitems: any = [...cartitems];
    let check = cartitems.filter(function (el: any) {
      return el.id == item.id;
    });
    if (check[0]) {
      if (item.count == 1) {
        setcount(0);
        newitems = cartitems.filter(function (el: any) {
          return el.id != item.id;
        });
      } else {
        item.count = item.count - 1;
      }
    }
    setcartitems(newitems);
    localStorage.setItem('mcart', JSON.stringify(newitems));
  };
  const deletefromcart = (id: number) => {
    let newitems: any = [...cartitems];
    newitems = cartitems.filter(function (el: any) {
      return el.id != id;
    });
    setcount(0);
    setcartitems(newitems);
    localStorage.setItem('mcart', JSON.stringify(newitems));
  };
  useEffect(() => {
    let localcartitems: any = localStorage.getItem('mcart');
    if (localcartitems != null) {
      localcartitems = JSON.parse(localcartitems);
      setcount(localcartitems.length);
      setcartitems(localcartitems);
    }
  }, []);
  const SignOut = async () => {};
  return (
    <AppContext.Provider
      value={{
        addtocart,
        deletefromcart,
        cartitems,
        removefromcart,
        formatNumber,
        SignOut,
        strippedString,
        hotReload,
        setHotReload,
        count,
        setcount,
        currency,
        setcurrency,
        subtotal,
        setsubtotal,
        opencart,
        setopencart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
