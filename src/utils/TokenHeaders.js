export default function generateHeader(user) {
    if(user.token) {
        return {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
    }
    const localUser = localStorage.getItem("linkr-localUser");
    if (localUser) {
        return {
            headers: {
                "Authorization": `Bearer ${localUser}`
            }
        }
    }
}