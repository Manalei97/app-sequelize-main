var memberTransformer = function (member) {
    // console.log(member)
    // do some changes on member
    delete member.dataValues.password
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