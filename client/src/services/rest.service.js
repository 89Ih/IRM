import axios from 'axios';

class RestService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  createPlan = async (requestBody) => {
    return this.api.post('/api/plan', requestBody);
  }
  // GET /api/examples
  getAllPlan = async () => {
    return this.api.get('/api/userPlans');
  }
    // GET /api/examples
    getAllPlans = async () => {
      return this.api.get('/api/plans');
    }
  // GET /api/examples/:id
  getPlan = async (id) => {
    return this.api.get(`/api/plan/${id}`);
  }
    // GET /api/examples/:id
    getTotalAmountWorkload = async (id) => {
      return this.api.get(`/api/totalAmountWorkload/${id}`);
    }
  // PUT /api/examples/:id
  updatePlan = async (id, requestBody) => {
    return this.api.put(`/api/plan/${id}`, requestBody);
  }
  // DELETE /api/examples/:id
  deletePlan = async (id) => {
    return this.api.delete(`/api/plan/${id}`);
  }
    // POST /api/examples/:id
 clonePlan = async (id, requestBody) => {
      return this.api.post(`/api/plan/${id}`, requestBody);
    }
  // Get User /api/examples/:id
  getUser = async (id) => {
    return this.api.get(`/api/user/${id}`);
  }
}

// Create one instance of the service
const restService = new RestService();

export default restService;