const request = require("supertest");
const app = require("../app"); // Assuming your Express app instance is exported from app.js

describe("Index Routes", () => {
  // Test for the '/' route
  describe("GET /api", () => {
    it("responds with status 200", async () => {
      const response = await request(app).get("/api");
      expect(response.status).toBe(200);
    });

    it('responds with "All good in here"', async () => {
      const response = await request(app).get("/api");
      expect(response.body).toBe("All good in here");
    });
  });
  // Test for the '/user/:id' route
  describe("GET /api/user/:id", () => {
    it("responds with status 200 and correct user data", async () => {
      // You can send a request to this route with a specific user ID and test the response
      // For example, assuming user ID is '123'
      const response = await request(app).get(
        "/api/user/65be368ba4fc218fe5916e0f"
      );
      expect(response.status).toBe(200);
      expect(response.body.msg).toBe("User");
      // Add more expectations as needed to test the correctness of user data
    });
  });
  // Test for the '/userPlans' route
  describe("GET /api/userPlans", () => {
    it("responds with status 200 and user plans data", async () => {
      const response = await request(app).get("/api/userPlans");
      expect(response.status).toBe(200);
      // Add expectations to test the correctness of user plans data
    });
  });
  // Test for the '/totalAmountWorkload/:encodedObj' route
  describe("GET /api/totalAmountWorkload/:encodedObj", () => {
    it("responds with status 200 and total amount workload data", async () => {
      // You need to provide a valid encoded object to test this route
      const encodedObj = encodeURIComponent(
        JSON.stringify({ user: "irm", weekOfYear: 13 })
      );
      const response = await request(app).get(
        `/totalAmountWorkload/${encodedObj}`
      );
      expect(response.status).toBe(200);
      // Add expectations to test the correctness of total amount workload data
    });
  });
  // Test for the '/plans' route
  describe("GET /api/plans", () => {
    it("responds with status 200 and all plans data", async () => {
      const response = await request(app).get("/api/plans");
      expect(response.status).toBe(200);
      // Add expectations to test the correctness of all plans data
    });
  });
  // Test for the '/plan/:id' route
  describe("GET /api/plan/:id", () => {
    it("responds with status 200 and specific plan data", async () => {
      // You need to provide a valid plan ID to test this route
      const planId = "65e1c34c1777153d5417c35c";
      const response = await request(app).get(`/api/plan/${planId}`);
      expect(response.status).toBe(200);
      // Add expectations to test the correctness of specific plan data
    });
  });
  // Test for the '/plan' route (Create plan)
  describe("POST /api/plan", () => {
    it("responds with status 201 and creates a new plan", async () => {
      // Provide valid request body data to create a new plan
      const requestBody = {
        plan: "Jasmine",
        description: "Testing tool",
        owner: "MES",
        priority: "Low",
        year: "2024",
        month: "March",
        workload: 20,
        weekOfYear: 13,
        user: "irm",
      };
      const response = await request(app).post("/api/plan").send(requestBody);
      expect(response.status).toBe(201);
      // Add expectations to test the correctness of created plan data
    });
  });
  // Test for the '/plan/:id' route (Update plan)
  describe("PUT /api/plan/:id", () => {
    it("responds with status 200 and updates the plan", async () => {
      // Provide a valid plan ID and updated data to test plan update
      const planId = "65e1c34c1777153d5417c35c";
      const updatedData = {
        plan: "Jasmine-Editing",
        description: "Testing tool",
        owner: "MES",
        priority: "Low",
        year: "2024",
        month: "March",
        workload: 20,
        weekOfYear: 13,
        user: "irm",
      };
      const response = await request(app)
        .put(`/api/plan/${planId}`)
        .send(updatedData);
      expect(response.status).toBe(200);
      // Add expectations to test the correctness of updated plan data
    });
  });
  // Test for the '/plan/:id' route (Delete plan)
  describe("DELETE /api/plan/:id", () => {
    it("responds with status 200 and deletes the plan", async () => {
      // Provide a valid plan ID to test plan deletion
      const planId = "65e1c35b1777153d5417c360";
      const response = await request(app).delete(`/api/plan/${planId}`);
      expect(response.status).toBe(200);
      // Add expectations to verify the deletion of the plan
    });
  });
});
