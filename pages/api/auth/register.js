import connectMongo from '../../../database/db';
import Users from '../../../model/User'
import { hash } from 'bcryptjs';

export default async function handler(req, res){
    connectMongo().catch(error => console.log(error));

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Nothing here"});
        const {email, password } = req.body;

        // check duplicate users
        const checkexisting = await Users.findOne({ email });
        if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});

        // hash password
        await Users.create({ email, password : await hash(password, 12)}, function(err, data){
            if(err) return res.status(404).json({ err });
           return res.status(201).json({ status : true, user: data})
        })

    } else{
      return res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}