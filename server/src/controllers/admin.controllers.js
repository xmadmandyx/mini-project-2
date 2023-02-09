const { AdminService } = require("../services/admin.service");



class AdminController {
    static async createAdmin(req, res) {
      try {
        const { username, password } = req.body;
        
        const admin = await AdminService.createAdmin({ username, password });
        
        res.json(admin);
      } catch (e) {
        console.log(e);
        res.status(404).json({ message: "User not found" });
      }
    }

//   //   static async getUserById(req, res) {
//   //     try {
//   //       const { uuid } = req.params;
//   //       const user = await UsersService.findUserById(uuid);
//   //       res.json(user);
//   //     } catch (e) {
//   //       console.log(e);
//   //       res.status(404).json({ message: "User not found" });
//   //     }
//   //   }

//   // static async getAdmin(_req, res) {
//   //   try {
//   //     const admins = await AdminService.getAllAdmins();
//   //     res.json(admins);
//   //   } catch (e) {
//   //     console.log(e);
//   //     res.status(404).json({ message: "Admins not found" });
//   //   }
//   // }

//   //   static async updateUserById(req, res) {
//   //     try {
//   //       const { uuid } = req.params;
//   //       const { name, password, email } = req.body;
//   //       const user = await UsersService.updateUserById(uuid, {
//   //         name,
//   //         password,
//   //         email,
//   //       });
//   //       res.json(user);
//   //     } catch (e) {
//   //       console.log(e);
//   //       res.status(404).json({ message: "User not found" });
//   //     }
//   //   }

//   //   static async deleteUserById(req, res) {
//   //     try {
//   //       const { uuid } = req.params;
//   //       const user = await UsersService.deleteUserById(uuid);
//   //       res.send("User deleted successfully...");
//   //     } catch (e) {
//   //       console.log(e);
//   //       res.status(404).json({ message: "User not found" });
//   //     }
//   //   }
}

module.exports = { AdminController };
