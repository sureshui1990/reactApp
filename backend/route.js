const route = (app) => {

    app.get('/', (req,res,next) => {
        res.send(['ben tennyson', 'kevin 11', 'quen tenyson']);
    })
};

module.exports = route;