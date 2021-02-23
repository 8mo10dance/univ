# frozen_string_literal: true

class UserMailer < ApplicationMailer
  def hello
    mail to: 'dxm.issatisfied@gmail.com',
         cc: '8mo10dance@protonmail.com',
         bcc: 'sunda0707@icloud.com',
         subject: 'hello'
  end
end
