export default function CheckIfNotExpired(createdAt , duration) {
    let timeBetweenThem = (new Date() / 1000 ) -  (new Date(createdAt).getTime() / 1000) 
    let useAble = timeBetweenThem < duration ? true : false
    return useAble
}