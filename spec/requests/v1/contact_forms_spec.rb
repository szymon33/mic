require "rails_helper"

describe API::V1::ContactFormsController do
  describe "POST create" do
    let(:create_action) do
      post_json "/v1/contact_forms", {}
    end

    it "is JSON" do
      create_action
      expect(response.content_type).to eql 'application/json'
    end

    it "is created" do
      create_action
      expect(response.status).to eql(201) # created
    end
  end
end
