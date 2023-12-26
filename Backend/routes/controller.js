const express = require('express');
const { Vonage } = require('@vonage/server-sdk');

const router = express.Router();

const vonage = new Vonage({
    apiKey: "23e079c6",
    apiSecret: "8V6qI3DNdI6udgV5"
  }); 

router.post('/sendOTP',(req,res) => {
    vonage.verify.start({
        number: "917730865642",
        brand: "Vonage"
      })
      .then(resp => {
        console.log(resp)
        return res.status(200).json({
            status: true,
            message:'OTP Sent Successfully',
            result: {
              requestID: resp.request_id,
            },
         });
      }).catch(err => {
        return res.status(500).json({
            status: false,
            error: err,
        })
      }
    );
});

router.post('/verify',(req,res) => {
   vonage.verify.check(req.query.request_id, req.query.code)
  .then(resp => {
    return res.status(200).json({
        status: true,
        message:'OTP verified Successfully',
        result: {
          requestID: resp.request_id,
        },
     });
  })
  .catch(err => {
    return res.status(500).json({
        status: false,
        error: err,
    })
  });
})

module.exports = router;