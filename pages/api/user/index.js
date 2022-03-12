import connectDB from "../../../middlewares/mongodb";
import bcrypt from "bcrypt"
import User from '../../../models/userModel';

const handler = async (req, res) => {
  if (req.method === 'POST') {
      console.log("Post request")
    // Check if name, email or password is provided
    const { name, email, password, role } = req.body;
    if (name && email && password) {
        try {
          // Hash password to store it in DB
          let encryptedPassword = await bcrypt.hash(password, 10);
          //var passwordhash = await bcrypt.sign(password);
          var user = new User({
            name,
            email,
            password: encryptedPassword,
            role
          });
          // Create new user
          var usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);