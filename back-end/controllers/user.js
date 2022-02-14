const User = require('../model/user');

exports.newUser = async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success : true, 
        user
    })

}

function hasId(user, userId, amountForUser) {
    if(user.owes[0]){//To check if user.owes = [] is NOT undefined.
        for(var i=0; i<user.owes.length; i++){
            if(user.owes[i].userId == userId) {
                amountForUser += user.owes[i].amount;
                user.owes[i].amount = amountForUser;
                return true;
            }
        }
    }
    return false;
  }

exports.owns = async (req, res, next) => {
    const {paidBy, amount, paidForUsers, type } = req.body;
    const user = await User.findOne({userId : paidBy});

    if(!user){
        res.status(400).josn({
            success : false,
            message : `No user found for id:${paidBy}`
        })
    }
    const numberOfUsers = paidForUsers.length+1;
         for(var i=0; i<numberOfUsers-1; i++){  //TC : O(N)
             var amountForUser = type == "EQUAL" ? amount/numberOfUsers : amount[i];
             if(!hasId(user, paidForUsers[i], amountForUser)){  //TC: O(N)
                 user.owes.push({
                     userId : paidForUsers[i],
                     amount : amountForUser
                 })
             }
         }


         await user.save();

         res.status(201).json({
            success : true, 
            user
        })

    
}