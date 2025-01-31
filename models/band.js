const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI)

class Band extends Model{} 

Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT, 
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {})



module.exports = Band