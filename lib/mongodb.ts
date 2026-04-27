/**
 * Create By Chazi ` Mpx.
 * Contact Me on wa.me/14314403688
 * Follow https://github.com/everlynnameyhst
 */

import { MongoClient } from "mongodb"

const MONGODB_URI =
  "mongodb+srv://levrouniverse_db_user:n6UOtilteK7rzv2j@nourv6s.dbpznrd.mongodb.net/ver6core?retryWrites=true&w=majority"

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing")
}

let client: MongoClient

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>
}

if (!global._mongoClientPromise) {
  client = new MongoClient(MONGODB_URI)
  global._mongoClientPromise = client.connect()
}

const clientPromise = global._mongoClientPromise

export default clientPromise
