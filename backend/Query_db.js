const db = require('../backend/server/db')

function Query(){
    this.db = db;
}

Query.prototype.Result = function(query,qrycbk){
   
    var self = this;
    self.db.query(query, (err, result) => {
        if (err) {
            qrycbk({ 'status': false, 'message': err })

        } else {
            qrycbk({ 'status': true, 'message': result })
        }
    });
}

Query.prototype.create = function (query, body, qrycbk) {

    var self = this;
    self.db.query(query, body, function (err, result) {

        if (err) {
            qrycbk({ 'status': false, 'message': err })

        } else {
            console.log(result);
            qrycbk({ 'status': true, 'message': result })

        }
    });
};



Query.prototype.delete = function (query, id, qrycbk) {
    var self = this;
    self.db.query(query, id, function (err, result) {
        if (err) {
            qrycbk({ 'status': false, 'message': err })


        } else {
            console.log(result);
            qrycbk({ 'status': true, 'message': result })
        }
    });
};

Query.prototype.viewselect = function (query, id, qrycbk) {
    var self = this;
    self.db.query(query, id, function (err, result) {
        if (err) {
            qrycbk({ 'status': false, 'message': err })


        } else {
            console.log(result);
            qrycbk({ 'status': true, 'message': result })
        }
    });
};

Query.prototype.update = function (query, content, id, qrycbk) {
    var self = this;
    self.db.query(query, content, id, function (err, result) {
        if (err) {
            qrycbk({ 'status': false, 'message': err })

        } else {
            console.log(result);
            qrycbk({ 'status': true, 'message': result })
        }
    });
};


module.exports = Query