const {z} = require("zod");

exports.createSchema = z.object({
    name : z.string().min(1,"Group name is required!")
})

exports.memberSchema = z.object({
    memberId : z.string().min(24,"Member Id is not a valid object!")
})