import xrRequest from '../request'

export function getHomeHotSuggests() {
  return xrRequest.get({ 
    url: "/home/hotSuggests" 
  })
}

export function getHomeCategories() {
  return xrRequest.get({
    url: "/home/categories"
  })
}

export function getHomeHouselist(currentPage) {
  return xrRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
