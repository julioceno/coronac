module.exports = {

    index(req, resp) {
        return resp.render('index.html')
    },

    casesCovid(req, resp) {
        return resp.render('cases-covid.html')
    },
    
    takeCare(req, resp) {
        return resp.render('take-care.html')
    },

    testCovid(req, resp) {
        return resp.render('test-covid.html')
    },

    diagnostic(req, resp) {
        return resp.render('diagnostic.html')
    },

    feed(req, resp) {
        return resp.render('feed.html')
    },

    testDone(req, resp) {
        return resp.render('test-done.html')
    }
}