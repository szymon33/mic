require 'rails_helper'

describe API::V1::ContactFormsController do
  describe 'POST create' do
    let(:create_action) { post_json '/v1/contact_forms', { contact_form: params } }

    before { create_action }

    describe 'with valid params' do
      let(:params) { attributes_for(:contact_form) }

      it 'is JSON' do
        expect(response.content_type).to eql 'application/json'
      end

      it 'is created' do
        expect(response.status).to eql(201) # created
      end

      it 'returns contact form record' do
        expect(json_response[:contact_form][:name]).to eq params[:name]
      end
    end

    describe 'with invalid params' do
      let(:params) { attributes_for(:contact_form).merge(name: nil) }

      it 'is unprocessed entity' do
        expect(response.status).to eql(422) # unprocessable_entity
      end

      it 'returns array of errors' do
        expect(json_response[:errors]).to be_a Array
      end

      it 'returns proper error message' do
        expect(json_response[:errors]).to include("Name can't be blank")
      end
    end
  end
end
