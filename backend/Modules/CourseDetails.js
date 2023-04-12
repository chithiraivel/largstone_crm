
const Query = require('../Query_db')
const queryCheck = new Query();

function CourseDetails(){

}

CourseDetails.prototype.Check = function(req,cbk){
    let action = req.params.action;
    console.log(action);
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
            break;
        }
        default:{
            console.log('All case Failed');
        }
    }
}

CourseDetails.prototype.VIEW=function(req,cbk){
    let query = 'select * from tua_crm.courses'
        queryCheck.Result(query, (err, result) => {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
}

CourseDetails.prototype.CREATE = function(req,cbk){
   
    var query = `INSERT INTO tua_crm.courses SET ? `
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

CourseDetails.prototype.DELETE=function(req,cbk){
    console.log(req.body.id);
    let query = `delete from tua_crm.courses where id=?`
    queryCheck.delete(query, req.body.id, function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        }
        else {
            cbk({ 'status': true, 'message': result })
        }
    })
}
CourseDetails.prototype.UPDATE = function(req,cbk){
 
    console.log(req.body);
    console.log(req.body.id);
    let id = req.body.id
    let query = `update  tua_crm.courses set ? where id=?`
    queryCheck.update(query, [req.body, id], function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        }
        else {
            cbk({ 'status': true, 'message': result })
        }
    })

}

CourseDetails.prototype.VIEWSELECT = function(req,cbk){
    
    let query = `select * from tua_crm.courses where id=?`
    queryCheck.viewselect(query, req.body.id, function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        }
        else {
            cbk({ 'status': true, 'message': result })
        }
    })

}

module.exports=CourseDetails;