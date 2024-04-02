const ECOSystem = () => {
return (
<div className="d-flex flex-column" style={{width:"650px"}}>
    {/* 1 */}
    <div className="d-flex flex-column  mb-3">
        <h5>a. Front-end Development Setup:</h5>
        <label className="mt-2" > Choose a framework/library :
        <select   className="form-control">
            <option>React</option>
            <option>Angular</option>
            <option> Vue</option>
            </select>
            </label>
        <label className="mt-2">
            ii. Set up the development environment with tools like Node.js, npm/yarn, and IDEs.
        </label>
        <input className="form-control"/>
        <label className="mt-2"> iii. Scaffold the project structure.</label>
        <input   className="form-control" />
    </div>
    {/* 2 */}
    <div className="d-flex flex-column mb-3">
        <h5>b. Back-end Development Setup:</h5>
        <label className="mt-2">Choose a backend framework</label>
        <select   className="form-control">
            <option>Express.js</option>
            <option>Django</option>
            <option> Spring Boot</option>
        </select>
        <label className="mt-2">
            ii. Set up the development environment with necessary tools and dependencies.
        </label>
        <input   className="form-control"/>
        <label className="mt-2">
            iii. Design the API contracts and routes.</label>
        <input   className="form-control"/>
    </div>
    {/* 3 */}
    <div className="d-flex flex-column mb-3">
        <h5>c. Database Setup:</h5>
        <label className="mt-2">
            Choose a database system

        </label>
        <select   className="form-control">
                <option>MySQL</option>
                <option>PostgreSQL</option>
                <option>MongoDB</option>
                <option>Firebase</option>
            </select>
        <label className="mt-2">
            ii. Set up the database schema and models.

        </label>
        <input   className="form-control"/>
        <label className="mt-2">
            iii. Establish database connections.

        </label>
        <input   className="form-control"/>
    </div>
    {/* 4 */}
    <div className="d-flex flex-column mb-3">
        <h5>d. Integration Setup:</h5>
        <label className="mt-2">
            i. Implement communication between front-end and back-end.

        </label>
        <input   className="form-control"/>
        <label className="mt-2">
            ii. Set up API endpoints and integrate them into the front-end.

        </label>
        <input   className="form-control"/>
    </div>
</div>
);
};

export default ECOSystem;