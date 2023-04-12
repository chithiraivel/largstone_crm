
const Query = require('../Query_db')
const queryCheck = new Query();

function StudentDetails(){

}

StudentDetails.prototype.Check = function(req,cbk){
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
        default:{
            console.log('All case Failed');
        }
    }
}

StudentDetails.prototype.VIEW=function(req,cbk){
    let query = 'select * from tua_crm.students'
        queryCheck.Result(query, (err, result) => {
            if (err) {
                cbk({ 'status': false, 'message': err })
            }
            else {
                cbk({ 'status': true, 'message': result })
            }
        })
}

StudentDetails.prototype.CREATE = function(req,cbk){
    var query = `INSERT INTO tua_crm.students SET ? `
    queryCheck.create(query, req.body, function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        } else {
            cbk({ 'status': true, 'message': result })
        }
    });

}

StudentDetails.prototype.DELETE=function(req,cbk){
    let query = `delete from tua_crm.students where Courseid=?`
    queryCheck.delete(query, req.body.Courseid, function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        }
        else {
            cbk({ 'status': true, 'message': result })
        }
    })
}
StudentDetails.prototype.UPDATE = function(req,cbk){
 
    let course_id = req.body.Courseid
    let query = `update  tua_crm.students set ? where Courseid=?`
    queryCheck.update(query, [req.body, course_id], function (err, result) {
        if (err) {
            cbk({ 'status': false, 'message': err })
        }
        else {
            cbk({ 'status': true, 'message': result })
        }
    })

}

module.exports=StudentDetails;