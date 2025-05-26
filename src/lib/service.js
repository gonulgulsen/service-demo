import axios from "axios";


const getData = async (userId) => {
    const userPromise = axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsPromise = axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const [userRes, postsRes] = await Promise.all([userPromise, postsPromise]);
    const user = userRes.data
    const posts = postsRes.data


    return {
        ...user,
        posts
    };
}
export default getData;

