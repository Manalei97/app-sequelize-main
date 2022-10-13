const { photosTransformer } = require("./photoTransformers")
var memberTransformer = function (member) {
    // console.log(member)
    // do some changes on member
    delete member.dataValues.password
    if(member.Photos){
        member.Photos = photosTransformer(member.Photos)
    }
    return member
}

var membersTransformer = function(members){
return members.map(function(member, i ){
    return memberTransformer(member)

    // return members.map{member =>memberTransformer(member)}
})
}
module.exports= {
memberTransformer,
membersTransformer
}