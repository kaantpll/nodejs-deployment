import { CreateUserType } from "user-type";
import { Errors } from "../../../src/common/constants";
import { NotFoundException } from "../../../src/exceptions/not-found";
import { UserModel } from "../model/user";

export class UserRepository {
  async getById(_id: string) {
    const user = await UserModel.findById(_id);

    if (!user) {
      throw new NotFoundException(Errors.USER.NOT_FOUND);
    }

    return user;
  }

  async create(model: CreateUserType) {
    const user = new UserModel({
      ...model,
    });

    await user.save();
  }

  async delete(_id: string) {
    UserModel.deleteOne({ _id });
  }
}
