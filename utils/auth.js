const withAuth = (req, res, next) => {
    if (!req.sessioj.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = withAuth;