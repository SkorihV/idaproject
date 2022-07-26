export const state = () => ({
    productsList: [
      {
        id: 1,
        name: 'Товар 1',
        description: 'Краткое описание товара 1',
        price: 10000,
        unit: "RUB"
      },
      {
        id: 2,
        name: 'Товар 2',
        description: 'Краткое описание товара 2',
        price: 10000,
        unit: "RUB"
      },
      {
        id: 3,
        name: 'Товар 3',
        description: 'Краткое описание товара 3',
        price: 10000,
        unit: "RUB"
      },
      {
        id: 4,
        name: 'Товар 4',
        description: 'Краткое описание товара 4',
        price: 10000,
        unit: "RUB"
      }
    ]
 })

export const getters =  {
  getProductsList: state => state.productsList,
}

export const mutations =  {
  PUT_PRODUCT: (state, productData) => {
    state.productsList.push(productData);
  },
  DELETE_PRODUCT: (state, productId) => {
    console.log(state)
    const newList = state.productsList.filter((item) => Number(item.id) !== Number(productId))
    state.productsList = newList;
  }
}

export const actions = {
  ADD_PRODUCT({commit}, product) {
    commit('PUT_PRODUCT', product);
  },
  REMOVE_PRODUCT({commit}, productId) {
    commit('DELETE_PRODUCT', productId);
  }
}



