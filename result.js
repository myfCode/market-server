function Result (data, code, message){
    this.data = data || null
    this.code = '0' || code
    this.message = 'OK' || message
}

module.exports = Result