import mongoose,{Mongoose} from "mongoose";
const MONGODB_URL=process.env.MONGODB_URL
interface mongooseConnection{
    conn:Mongoose|null;
    promise:Promise<Mongoose> | null;
}

let cached:mongooseConnection=(global as any).mongoose;
if(!cached){
    cached=(global as any).mongoose={conn:null, promise:null}
}
export const ConnectToDataBase=async ()=>{
    if(cached.conn){
        return cached.conn;
    }
    if(!MONGODB_URL) throw new Error('missing MONGODB_URL is not Defined');
    cached.promise=cached.promise|| mongoose.connect(MONGODB_URL,{dbName:'imagnify',bufferCommands:false})
    cached.conn=await cached.promise;
    return cached.conn;
}