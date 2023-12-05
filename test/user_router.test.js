/*** IMPORT */
const request = require('supertest')
const app = require('../api/app')
const DB = require('../api/db.config')

let userId

describe('USER ROUTER', () => {

    afterAll( async () => {
        await DB.sequelize.close()
    })

    describe('TRY PUT', () => {
        
        it('Should return 201 /=> Add user', async () => {
            const response = await request(app)
                .put('/users')
                .send({
                    nom: 'roger',
                    prenom: 'marcel'
                })
            userId = response.body.data.id
            expect(response.status).toBe(201)
        })
    })

    describe('TRY PATCH', () => {
        it('Should return 200 /=> Modify', async () => {
            const response = await request(app)
                .patch(`/users/${userId}`)
                .send({
                    nom: 'rogerr',
                    prenom: 'marcell'
                })
            expect(response.status).toBe(200)
        })        
    })
})