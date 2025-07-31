//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get('/', function(req, res) {
    req.session.data = {}
    res.render('index')
})

router.post('search-results', function(req, res) {
    req.session.data['search-query'] = 'xxx'
})
