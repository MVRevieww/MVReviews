const express = require('express')
const result = require('../utils/result')
const pool = require('../db/db')



const router = express.Router();

router.post('/login', (req,res)=>{
    res.send("Hii from login route ")
    const{mobile,email, password} = req.body;

    if(mobile != null){
        const sql = `select mobile,password from users where mobile = ? AND password = ?;`
    pool.query(
        sql,[ mobile, password ],(error,data)=>{
            if(data){

                res.send(result.createSuccessResult("Login Successful "))
            }else{
                res.send(result.createErrorResult('Invalid email or password'))
            }
            res.send(result.createResult(error, data))
        }
    )
    }
    else{
        const sql = `select email,password from users where email = ? AND password = ?;`
    pool.query(
        sql,[ email, password ],(error,data)=>{
            if(data){

                res.send(result.createSuccessResult("Login Successful "))
            }else{
                res.send(result.createErrorResult('Invalid email or password'))
            }
            res.send(result.createResult(error, data))
        }
    )
    }

    

})

router.post('/signup', (req,res)=>{

    // res.send("Hii from sign route ")
    const{first_name, last_name, email, password, mobile, birth} = req.body;

    const sql = `INSERT INTO users(first_name, last_name, email, password, mobile, birth ) VALUES(?,?,?,?,?,?)`
  pool.query(
    sql,
    [first_name, last_name, email, password, mobile, birth],
    (error, data) => {
      res.send(result.createResult(error, data))
    }
  )
})

module.exports = router