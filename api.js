module.exports = (req, res, next) => {
  console.log('api')
  res.write('"api"')
  next()
} 