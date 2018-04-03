require 'rails_helper'

describe User, '#is_password?' do
  it "checks if the user's password matches the argument" do
    user = User.create(
      first_name: 'test',
      last_name: 'test',
      zip_code: '11111',
      email: 'test@test.com',
      password: 'password'
    )

    expect(user.is_password?('password')).to eq true
  end
end

describe User, '#password=' do
  it "creates and sets a password digest for the user" do
    user = User.create(
      first_name: 'test',
      last_name: 'test',
      zip_code: '11111',
      email: 'test@test.com',
      password: 'password'
    )

    expect(user.password_digest).not_to eq nil
  end
end
