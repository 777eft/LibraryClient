import axios from 'axios';

export default axios.create({
    baseURL:'https://41d9-2001-8003-42a3-2100-bdd0-2e29-3cc0-4ef9.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});