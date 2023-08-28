export const goToHomePage = (navigate) => {
    navigate("/posts")
}

export const goToSignupPage = (navigate) => {
    navigate("/signup")
}

export const goToLoginPage = (navigate) => {
    navigate("/")
}

export const goToCommentsPage = (navigate, id) => {
    navigate(`/post-comments/${id}`)
}

// export const goToUserPage = (navigate) => {
//     navigate("/user")
// }