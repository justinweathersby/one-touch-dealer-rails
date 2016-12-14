class ApplicationMailer < ActionMailer::Base
  default from: 'support@onetouchdealer.com'
  layout 'mailer'

  def send_contact_email(contact)
    email_address = 'onetouchdealer@gmail.com'
    @contact      = contact
    mail(to: email_address, subject: "Contact Us form submission. (#{@contact[:dealership_name]})")
  end
end
