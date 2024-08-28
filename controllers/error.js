exports.get404 = (req, res, next) => {
    res.status(404);
    console.log('Page not found!!');
  };
  