const { admins } = require("../../models");

class AdminService {
  
    static async createAdmin({ username, password}) {
      try {
        const adminCreated = await admins.create({username, password});
        return adminCreated;
      } catch (e) {
        
        console.log(e);
        throw new Error();
      }
    }

//   //   static async findUserById(uuid) {
//   //     try {
//   //       return await User.findOne({ where: { uuid }, include: "tasks" });
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   }

//   // static async getAllAdmins() {
//   //   try {
//   //     console.log("im here");
//   //     return await Admin.findAll();
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // }

//   //   static async updateUserById(uuid, { name, email, password }) {
//   //     try {
//   //       const user = await this.findUserById(uuid);
//   //       if (name) user.name = name;
//   //       if (email) user.email = email;
//   //       if (password) user.password = password;
//   //       await user.save();
//   //       return user;
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   }

//   //   static async deleteUserById(uuid) {
//   //     try {
//   //       const user = await this.findUserById(uuid);
//   //       await user.destroy();
//   //       return user;
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   }
}

module.exports = { AdminService };
