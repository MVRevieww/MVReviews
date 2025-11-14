const express = require('express')
const result = require('../utils/result')
const pool = require('../db/db')



const router = express.Router();

router.post('/login', (req, res) => {

    //implement login with email also !!!!




        if (error) {
            return res.send(result.createErrorResult("Database error"));
        }

        if (data.length > 0) {
        } else {
            return res.send(result.createErrorResult("Invalid mobile or password"));
        }

    });
});


router.post('/signup', (req,res)=>{

    const{first_name, last_name, email, password, mobile, birth} = req.body;

    
    const sql = `INSERT INTO users(first_name, last_name, email, password, mobile, birth ) VALUES(?,?,?,?,?,?)`
    pool.query(sql, [first_name, last_name, email, password, mobile, birth], (error, data) => {
       res.send(result.createResult(error, data))
    }
  )
})

router.post('/EditProfile', (req,res)=>{
    const{id, first_name, last_name, email, mobile, birth} = req.body;
    const sql = `UPDATE users SET first_name = ?, last_name = ?,email = ?, mobile = ?,birth = ? WHERE id = ?;`
    pool.query(sql, [first_name, last_name, email, mobile, birth,id], (error, data) => {
       res.send(result.createResult(error, data))
    }
  )
})

router.post('/ChangePassword', (req,res)=>{
    const{id, newPassword } = req.body;

    const sql = `UPDATE users SET Password = ? WHERE id = ?;`
    pool.query(sql, [newPassword, id], (error, data) => {
       res.send(result.createResult(error, data))
    })
})

module.exports = router