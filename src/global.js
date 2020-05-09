let url

if (!processs.env.NODE_ENV || process.env.NODE_ENV === 'development' ) {
    url = 'http://localhost/backend/public/api'
} else {
    url = 'https://tingkat-stress.herokuapp.com/api'
}

export { url }