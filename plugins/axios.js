export default function ({ $axios, redirect, $bvToast }) {
  $axios.onError(error => {
    if(error.response.status === 401) {
      redirect('/login')

    }
  })
  $axios.onRequest(config => {
    let token = localStorage.getItem('token')
    if(token) config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  })
}
