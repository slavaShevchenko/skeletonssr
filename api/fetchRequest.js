export const fetchRequest = (url, requestOptions, onSuccess, onError) => {
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((response) => {
      onSuccess(response)
    })
    .catch((error) => {
      console.error('Error:', error)
      onError?.(error)
    })
}
