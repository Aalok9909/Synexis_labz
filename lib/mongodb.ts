import { MongoClient } from 'mongodb';

const atlasUri = process.env.MONGODB_URI ?? 'mongodb+srv://shahaalok184_db_user:FaA8MMhkWRRc430S@cluster0.acdjuna.mongodb.net/synexis_labs?retryWrites=true&w=majority';
const localUri = 'mongodb://127.0.0.1:27017/synexis_labs';
const options = {};

let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

async function createMongoClient(uri: string) {
  const client = new MongoClient(uri, options);
  await client.connect();
  return client;
}

async function connectWithFallback() {
  try {
    const atlasClient = await createMongoClient(atlasUri);
    console.log('MongoDB connected via Atlas.');
    return atlasClient;
  } catch (atlasError) {
    console.warn('Atlas MongoDB connection failed, falling back to local MongoDB:', atlasError);
    const localClient = await createMongoClient(localUri);
    console.log('MongoDB connected via local MongoDB.');
    return localClient;
  }
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = connectWithFallback();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = connectWithFallback();
}

export default clientPromise;
