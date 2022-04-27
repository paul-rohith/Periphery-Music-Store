const express = require('express');
const pool = require('../db');
const router = express.Router();

router.use(express.json());

//user feed
router.get('/products',(request,response,next)=>{
    const comm='SELECT * FROM album INNER JOIN album_type ON album.album_ID=album_type.album_ID';
    pool.query(comm,(err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

//display order history
router.get('/orderHistory/:customerID',(request,response,next)=>{
    const {customerID}=request.params;
    const comm='SELECT orders.order_ID,orders.date_time,orders.order_status,order_items.album_ID,order_items.alb_type,order_items.quantity FROM orders INNER JOIN order_items ON orders.order_ID=order_items.order_ID WHERE orders.customer_ID=$1';
    pool.query(comm,[customerID],(err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

//user details
router.get('/details/:id',(request,response,next)=>{
    const {id}=request.params;
    const comm='SELECT email_ID,first_name,last_name,phone_num,address_customer FROM customer WHERE customer_ID=$1';
    pool.query(comm,[id],(err,res)=>{
        if(err) return next(err);
        response.json(res.rows);
    });
});

//add to cart
router.put('/addToCart',(request,response,next)=>{    
    const {customer_ID,alb_type,album_ID,quantity}=request.body; 
    console.log(request.body); 

    pool.query('SELECT * FROM album_type WHERE alb_type = $1 AND album_ID = $2', [alb_type, album_ID], (err, res) => {
        if (err)
            console.log(err);

        if (res.rows[0].stock >= quantity)
        {
            const comm='SELECT * FROM addToCart WHERE customer_ID=$1 AND alb_type=$2 AND album_ID=$3';

            pool.query(comm,[customer_ID,alb_type,album_ID],(err,res)=>{
                if(err) return next(err);

                if(res.rowCount==1)
                {
                    console.log('already exists');
                    var quan=res.rows[0].quantity;
                    console.log(quan);
                    quan=quan+1;
                    console.log(quan);
                    pool.query('UPDATE addToCart SET quantity=$1 WHERE customer_ID=$2 AND alb_type=$3 AND album_ID=$4',
                        [quan,customer_ID,alb_type,album_ID],
                        (err1,res1)=>{
                            if(err1) return next(err1);
                            //console.log("updated I think");
                        });
                }
                else{
                    console.log('doesn\'t exist yet');
                    pool.query('INSERT INTO addToCart(customer_ID,alb_type,album_ID,quantity) VALUES ($1,$2,$3,$4)',
                        [customer_ID,alb_type,album_ID,quan],
                        (err1,res1)=>{
                            if(err1) return next(err1);
                            //console.log("updated I think");
                        });
                }
            });
        }

        else
        {
            console.log('Insufficient stock');
            return next(new Error('Insufficient stock'));
        }
    });
});

//add to order table
router.put('/user/placeOrder/:id',(request,response,next)=>{
    const {id}=request.params;//id=customer ID
    pool.query('SELECT * FROM addToCart WHERE customer_id=$1',[id],(err,res)=>{
        if(err) return next(err);
        
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        pool.query('INSERT INTO orders(customer_id,date_time,order_status) VALUES ($1,$2,$3) RETURNING order_ID',[id,dateTime,"on the way"],
        (err1,res1)=>{
            //console.log("pls print this");
            if(err1) return next(err1);
            // console.log("im here");
            // console.log(res1.rows);
            //response.json(res1.rows);
            const {order_id}=res1.rows[0];
            for(let i=0;i<res.rowCount;i++){
                //console.log(res.rows);
                const command='INSERT INTO order_items(order_ID,alb_type,album_ID,quantity) VALUES($1,$2,$3,$4)';
                const {alb_type,album_id,quantity}=res.rows[i];
                console.log('inside');
                
                pool.query(command,[order_id,alb_type,album_id,quantity],(err2,res2)=>{
                    if(err2) return next(err2);
                    return;
                });
                console.log("here 789");
            } 
        });
        
        for(let i=0;i<res.rowCount;i++){//for every row in cart. decrease stock in album_type
            const {alb_type,album_id,quantity}=res.rows[i];
            pool.query('SELECT stock FROM album_type WHERE alb_type = $1 AND album_ID = $2', [alb_type, album_id], (err, res) => {
                var final_stock = res.rows[0].stock;
                final_stock = final_stock - quantity;
         
                pool.query('UPDATE album_type SET stock = $1 WHERE alb_type = $2 AND album_ID = $3', [final_stock, alb_type, album_id], (err, res) => {
                    if(err)
                        console.log(err);
                });
            });
            console.log('updated stock'+i);
        }
        console.log('updated stock');
 
    });
    pool.query('DELETE FROM addToCart WHERE customer_ID = $1', [id], (err, res) => {
        if(err)
            console.log(err);
 
        console.log('Cleared cart');
    });
    response.json({success:true,message:"Order Placed Successfully"});
 
});

//payment receipt
router.get('/receipt', (request, response));

router.use((err,req,res,next)=>{
    res.status(err.status||500);
    res.json(err);
    console.log(err);
});

module.exports = router;