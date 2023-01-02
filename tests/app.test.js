import request from 'supertest'
import app, { response } from '../app.js'

describe ("POST /users", ()=>{
    
    describe("given a email and name", ()=>{
        // should save the email and name to the database
        // should respond with a json object containing the user
        // should respond with a 201 status code
        test("should respond with a 200 status code", async () =>{
            const response = await request(app).post("/users").send({
                name: "Test Name",
                email: "test@test.com"
            })
            expect(response.statusCode).toBe(201)
        })
    })

    describe("when the email or name is missing", ()=>{
        // should respond with a status code of 400
    })
})

describe ("GET /users", ()=>{
    test("should respond with a 200 status code and the list of users", async() =>{
        const response = await request(app).get("/users")
        .expect(200)
        .then((response) => {
            e
        })
    })
})