import Token from '../library/utils/token'


const whileList = [];


function login(req, res, next) {
    let url = req.url
    if (whileList.includes(url)) {
        next()
    } else {
        let response = {
            success: true,
            model: {

            }
        }
        let token = req.get('token') || ""
        if (!token) {
            response.success = false
            response.errorCode = '1403'
            res.send(JSON.stringify(response));
        }
        let data = Token.decrypt(token)
        if (data.token) {
            next()
        } else {
            response.success = false
            response.errorCode = '1403'
            res.send(JSON.stringify(response));
        }

    }
}

export default login