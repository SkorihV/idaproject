
export const state = () => ({
    productsList: [],
    cartProducts:[],
    sortType: 'default'
 })

export const getters =  {
  getProductsList: state => state.productsList,
  getSortType: state => state.sortType,
  getCartProducts: state => state.cartProducts
}

export const mutations =  {
  /**
   * Добавляем товар в state и в localStorage
   * @param state
   * @param newProductData
   * @constructor
   */
  PUT_PRODUCT: (state, newProductData) => {
    const productListStore = localStorage.getItem('idaProjectStore');
    let productList = [];

    state.productsList.push(newProductData);

    if (productListStore) {
      productList = JSON.parse(productListStore);
    }
    productList.push(newProductData);
    localStorage.setItem('idaProjectStore', JSON.stringify(productList));
  },
  /**
   * Достаем данные из localStorage и кладем в state
   * @param state
   * @returns {boolean}
   * @constructor
   */
  PUT_PRODUCTS_FROM_STORE: (state) => {
    const productListStore = localStorage.getItem('idaProjectStore');

    if (!productListStore) { return false  }

    let productList = JSON.parse(productListStore);
    productList.forEach(item => {
      state.productsList.push(item);
    })
  },
  PUT_PRODUCTS_FROM_STORE_IN_CART: (state) => {
    const productListStore = localStorage.getItem('idaProjectCartStore');

    if (!productListStore) { return false  }

    let productList = JSON.parse(productListStore);
    productList.forEach(item => {
      state.cartProducts.push(item);
    })
  },
  DELETE_PRODUCT: (state, productId) => {
    state.productsList = state.productsList.filter((item) => Number(item.id) !== Number(productId));
    localStorage.setItem('idaProjectStore', JSON.stringify(state.productsList));
  },
  CHANGE_SORT_TYPE: (state, newType) => {
    state.sortType = newType;
  },
  PUT_PRODUCT_IN_CART: (state, newProduct) => {
    let isFindProduct           = state.cartProducts.filter(product =>  Number(product.id) === Number(newProduct.id));

    if (isFindProduct.length) {
      for (let i = 0; i < state.cartProducts.length; i++) {
        if( state.cartProducts[i].id === newProduct.id) {
          state.cartProducts[i].amount++;
          break;
        }
      }
    } else {
      newProduct.amount = 1;
      state.cartProducts.push(newProduct);
    }
    localStorage.setItem('idaProjectCartStore', JSON.stringify(state.cartProducts));
  },
  DELETE_PRODUCT_IN_CART: (state, productId) => {
    state.cartProducts = state.cartProducts.filter(product => product.id !== productId);
    localStorage.setItem('idaProjectCartStore', JSON.stringify(state.cartProducts));

  }
}

export const actions = {
  async ADD_PRODUCT({commit}, newProductData) {
    await commit('PUT_PRODUCT', newProductData);
  },
  async INIT_PROCESSING_STORE({commit}) {
    await commit('PUT_PRODUCTS_FROM_STORE');
    await commit('PUT_PRODUCTS_FROM_STORE_IN_CART');
  },
  REMOVE_PRODUCT({commit}, productId) {
    commit('DELETE_PRODUCT', productId);
  },
  ADD_SORT_TYPE({commit}, sortType) {
    commit('CHANGE_SORT_TYPE', sortType);
  },
  ADD_PRODUCT_IN_CART({commit}, product) {
    commit('PUT_PRODUCT_IN_CART', product)
  },
  REMOVE_PRODUCT_IN_CART({commit}, productId) {
    commit('DELETE_PRODUCT_IN_CART',productId);
  }

}



