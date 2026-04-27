/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */

import { MongoClient } from "mongodb"

const MONGODB_URI =
  "mongodb+srv://levrouniverse_db_user:n6UOtilteK7rzv2j@nourv6s.dbpznrd.mongodb.net/ver6core?retryWrites=true&w=majority"

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!global._mongoClientPromise) {
  client = new MongoClient(MONGO_URI, options)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export default clientPromise
