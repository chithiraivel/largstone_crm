const Query = require('../Query_db')
const queryCheck = new Query();


function BatchDetails(){

}

BatchDetails.prototype.Check = function(req,cbk){
    let action = req.params.action;

    switch (action) {

        case 'create' :{
            this.CREATE(req,cbk)
            break;
        }
        case 'update' :{
            this.UPDATE(req,cbk)
            break;
        }
        case 'view' :{
            this.VIEW(req,cbk)
            break;
        }
        case 'delete':{
            this.DELETE(req,cbk)
            break;
        }
        case 'viewselect':{
            this.VIEWSELECT(req,cbk)
        }
        default:{
            console.log('All case Failed');
        }
    }
}

BatchDetails.prototype.VIEW=function(req,cbk){
    let query = 'select * from tua_crm.batches'
        queryCheck.Result(query, (err, result) => {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
}

BatchDetails.prototype.CREATE = function(req,cbk){
   
    var query = `INSERT INTO tua_crm.batches SET ? `
    queryCheck.create(query, req.body, function(err, result) {
        console.log(req.body);
        if (err) {
            cbk({ 'status': false, 'message': err })
        } else {
            console.log(result);
            cbk({ 'status': true, 'message': result })
        }
    });

}

BatchDetails.prototype.DELETE=function(req,cbk){
    let query = `delete from tua_crm.batches where id=?`
    queryCheck.delete(query, req.body.id, function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        }
        else {
            cbk({ 'status': true, 'message': result })
        }
    })
}
BatchDetails.prototype.UPDATE = function(req,cbk){
 
    let id = req.body.id
    let query = `update  tua_crm.batches set ? where id=?`
    queryCheck.update(query, [req.body, id], function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        }
        else {
            cbk({ 'status': true, 'message': result })
        }
    })

}

BatchDetails.prototype.VIEWSELECT = function(req,cbk){
    
    let query = `select * from tua_crm.batches where id=?`
    queryCheck.viewselect(query, req.body.id, function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        }
        else {
            cbk({ 'status': true, 'message': result })
        }
    })

}

module.exports=BatchDetails;