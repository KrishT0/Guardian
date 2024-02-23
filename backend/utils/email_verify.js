export const verifyEmail=(email)=>{
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email);
}