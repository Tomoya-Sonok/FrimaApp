require "rails_helper"

feature "User" do
  describe "#create" do
    it "is invalid without a nickname" do
      user = User.new(nickname: "")
      user.valid?
      expect(user.errors[:nickname]).to include("can't be blank")
    end

    it "is invalid without a encrypted_password" do
      user = User.new(encrypted_password: "")
      user.valid?
      expect(user.errors[:encrypted_password]).to include("can't be blank")
    end

    it "is invalid without a first_name" do
      user = User.new(first_name: "")
      user.valid?
      expect(user.errors[:encrypted_password]).to include("can't be blank")
    end

    it "is invalid without a last_name" do
      user = User.new(last_name: "")
      user.valid?
      expect(user.errors[:last_name]).to include("can't be blank")
    end

    it "is invalid without a furigana_first" do
      user = User.new(furigana_first: "")
      user.valid?
      expect(user.errors[:furigana_first]).to include("can't be blank")
    end

    it "is invalid without a birthday" do
      user = User.new(birthdate: "")
      user.valid?
      expect(user.errors[:birthdate]).to include("can't be blank")
    end

    it "is invalid " do
      user = User.new(id: 1, nickname: "testuser", email: "test@test.com", first_name: "user", last_name: "test", furigana_first: "ユーザー", furigana_last: "テスト", birthdate: "1999/03/21", tell: 00000000000, created_at: 2020/03/16, updated_at: 2020/03/16, password: "0000000", password_confirmation: "0000000")
      user.valid?
      expect(user).to be_valid
    end

  end
end