import { defineStore } from 'pinia'

export const useMainStore = defineStore('MainStore', {
  state: () => {
    return {
      firstLoad: true,
      loader: true,
      formSended: false,
      burgerState: false,
      swiperPosition: 0,
      swiperTransition: false,
      soloScreen: true,
      filterCategory: 0,
      filterSearch: '',
      data: [],
      departments: [],
      positions: [],
      categories: [],
      hotNews: [],
    }
  },
  getters: {
    getFirstLoad: (state) => {
      return state.firstLoad
    },
    getLoader: (state) => {
      return state.loader
    },
    getFormSended: (state) => {
      return state.formSended
    },
    getBurgerState: (state) => {
      return state.burgerState
    },
    getSwiperPosition: (state) => {
      return state.swiperPosition
    },
    getSwiperTransition: (state) => {
      return state.swiperTransition
    },
    getSoloScreen: (state) => {
      return state.soloScreen
    },
    getFilterCategory: (state) => {
      return state.filterCategory
    },
    getFilterSearch: (state) => {
      return state.filterSearch
    },
    getSearch: (state) => {
      return state.filterSearch
    },
    getDepartments: (state) => {
      return state.departments
    },
    getPositions: (state) => {
      return state.positions
    },
    getData: (state) => {
      return state.data
    },
    getCategories: (state) => {
      return state.categories
    },
    getHotNews: (state) => {
      return state.hotNews
    },
  },
  actions: {
    setFirstLoad(payload) {
      this.firstLoad = payload
    },
    setLoader(payload) {
      this.loader = payload
    },
    setFormSended(payload) {
      this.formSended = payload
    },
    setBurgerState(payload) {
      this.burgerState = payload
    },
    setSwiperPosition(payload) {
      this.swiperPosition = payload
    },
    setSwiperTransition(payload) {
      this.swiperTransition = payload
    },
    setSoloScreen(payload) {
      this.soloScreen = payload
    },
    setFilterCategory(payload) {
      this.filterCategory = payload
    },
    setFilterSearch(payload) {
      this.filterSearch = payload
    },
    setDepartments(payload) {
      this.departments = payload
    },
    setPositions(payload) {
      this.positions = payload
    },
    setData(payload) {
      this.data = payload
    },
    setCategories(payload) {
      this.categories = payload
    },
    setHotNews(payload) {
      this.hotNews = payload
    },
  },
})
