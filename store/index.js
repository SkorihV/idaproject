export const state = () => ({
    productsList: [
    ],
    sortType: 'default'
 })

export const getters =  {
  getProductsList: state => state.productsList,
  getSortType: state => state.sortType
}

export const mutations =  {
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
  PUT_PRODUCTS_FROM_STORE: (state) => {
    const productListStore = localStorage.getItem('idaProjectStore');

    if (!productListStore) { return false  }

    let productList = JSON.parse(productListStore);
    productList.forEach(item => {
      state.productsList.push(item);
    })

  },
  DELETE_PRODUCT: (state, productId) => {
    state.productsList = state.productsList.filter((item) => Number(item.id) !== Number(productId));
  },
  CHANGE_SORT_TYPE: (state, newType) => {
    state.sortType = newType;
  }
}

export const actions = {
  async ADD_PRODUCT({commit}, newProductData) {
    await commit('PUT_PRODUCT', newProductData);
  },
  async INIT_PROCESSING_PUT_PRODUCT_FROM_STORE({commit}) {
    await commit('PUT_PRODUCTS_FROM_STORE');
  },
  REMOVE_PRODUCT({commit}, productId) {
    commit('DELETE_PRODUCT', productId);
  },
  ADD_SORT_TYPE({commit}, sortType) {
    commit('CHANGE_SORT_TYPE', sortType);
  }
}



