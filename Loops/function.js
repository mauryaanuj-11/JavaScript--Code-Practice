let user={
    name: "Anuj Maurya",
    branch: "Infromation Technology",
    college: "Gniot group of institution"
}

function showStudentDetail(userDetail){
    console.log(`Student: ${userDetail.name}\nbranch: ${userDetail.branch}\ncollege: ${userDetail.college}`)
}
console.log(showStudentDetail({
    name: "Anuj Maurya",
    branch: "Infromation Technology",
    college: "Gniot group of institution"
}))

