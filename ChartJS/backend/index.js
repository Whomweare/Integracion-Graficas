const express = require('express')
const sequelize = require('./conexion/database')

const Empleado = require('./modelo/Producto')

const app = express()

app.use(express.json())

const cors = require('cors');
app.use(cors());

var puerto = 5000;

//Total de productos segun la marca
app.get('/total-producto-marca', async (req, resp) => {

    try {

        const resultado = await Empleado.findAll({
            attributes: [
          
                [sequelize.col('plannerCode'), 'plannerCode'],
                [sequelize.fn('COUNT', sequelize.col('plannerCode')), 'cantidad']
            ],
            group: ['plannerCode'],
            raw: true
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registros' })
        }
        else {
            resp.status(200).send(resultado)
        }


    } catch (error) {
        resp.status(500).send({ error: 'Ocurrio un error' + error })
    }
})

//Suma total segun el tipo de producto
app.get('/valor-total-producto', async (req, resp) => {

    try {
        const resultado = await Empleado.findAll({
            attributes: [
          
                [sequelize.col('productType'), 'productType'],
                [sequelize.fn('SUM', sequelize.col('value')), 'total']
            ],
            group: ['productType'],
            raw: true
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registros' })
        }
        else {
            resp.status(200).send(resultado)
        }


    } catch (error) {
        resp.status(500).send({ error: 'Ocurrio un error' + error })
    }
})

//Calcula el valor mas bajo segun el tipo de producto
app.get('/valor-minimo-producto', async (req, resp) => {

    try {

        const resultado = await Empleado.findAll({
            attributes: [
          
                [sequelize.col('productType'), 'productType'],
                [sequelize.fn('MIN', sequelize.col('value')), 'total']
            ],
            group: ['productType'],
            raw: true
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registros' })
        }
        else {
            resp.status(200).send(resultado)
        }


    } catch (error) {
        resp.status(500).send({ error: 'Ocurrio un error' + error })
    }
})

app.listen(puerto, () => {
    console.log('Aplicacion ejecutando en el puertO' + puerto)
})