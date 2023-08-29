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

export const goToUserPage = (navigate) => {
    navigate("/users")
}

export const goToUserDetailsPage = (navigate, id) => {
    navigate(`/user-details/${id}`)
}