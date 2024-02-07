const { User, Vapes, Juice } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const mongoose = require("mongoose");
const { signToken } = require("../utils/auth");
// const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    // me: async (parent, args, context) => {
    //   try {
    //     if (context.user) {
    //       const userId = context.user._id;
    //       const user = await User.findById({ _id: userId }).populate({
    //         path: "order",
    //         populate: {
    //           path: "products.productId",
    //           model: "Product",
    //         },
    //       });

    //       return user;
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },

    getAllVapes: async () => {
      try {
        return await Vapes.find();
        
      } catch (error) {
        console.error(err);
      }
    },

    getAllJuices: async () => {
      try {
        return await Juice.find();
        
      } catch (error) {
        console.error(err);
      }
    }
  },  

  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.error(err);
      }
    },

    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError(
            "No user found with this email address"
          );
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  }
};

module.exports = resolvers;
