import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://in-clone-60fda/us-central1/api'
    // "http://localhost:5001/clone-60fda/us-central1/api",
});

export default instance;