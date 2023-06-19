/* eslint-disable no-console */
import 'dotenv/config.js'
import mongoose from 'mongoose'
import app from './src/app.js'
import MongoClient from './src/MongoClient.js'

async function run() {
  const db = new MongoClient()
  try {
    // Environment variables
    const PORT = process.env.PORT || 3003
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