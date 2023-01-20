
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/db'
import Users from '../../../model/User'
import { compare } from 'bcryptjs';

export default NextAuth({
    providers : [
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                connectMongo().catch((error) => console.log(error))

                // check user existance
                const result = await Users.findOne( { email : credentials.email})
                if(!result){
                    throw new Error("User doesn't exist.")
                }

                // compare()
                const checkPassword = await compare(credentials.password, result.password);
                
                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("User doesn't exist.")
                }

                return result;

            }
        })
    ],
    secret: "U0FLRE1kYWRtYWRhREtMQUtuS0ZsYW5mZHNLTVNGU0tOZlNLbVNLRlNLRlM6a21TTUtTRGRmLQ==",
    session: {
        strategy: 'jwt',
    }
})