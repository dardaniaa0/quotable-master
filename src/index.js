/* eslint-disable no-console */
import 'dotenv/config.js'
import mongoose from 'mongoose'
import app from './app.js'
import MongoClient from './MongoClient.js'

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  const db = new MongoClient()
  try {
    // Environment variables
    const PORT = process.env.PORT || 4000
    // Connect to database, then start the Express server
    await db.connect()
    app.listen(PORT, () => {
      console.log(`Quotable is running on port: ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}
run()