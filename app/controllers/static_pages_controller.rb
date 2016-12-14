class StaticPagesController < ApplicationController
  def index
  end

  def terms
  end

  def contact_form
    @contact_form = {:email => params[:email], :dealership_name => params[:dealership_name], :dealership_website => params[:dealership_website], :message => params[:message]}
    ApplicationMailer.send_contact_email(@contact_form).deliver
    flash[:alert] = "Thank you for reaching out. We will get back to you as soon as possible."
    redirect_to root_path
  end
end
