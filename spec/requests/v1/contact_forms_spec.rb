require 'rails_helper'

describe API::V1::ContactFormsController do
  describe 'POST create' do
    let(:create_action) { post_json '/v1/contact_forms', contact_form: params }

    before { create_action }

    describe 'with valid params' do
      let(:params) { attributes_for(:contact_form) }

      it 'is JSON' do
        expect(response.content_type).to eql 'application/json'
      end

      it 'is created' do
        expect(response.status).to eql(201) # created
      end

      context 'returns' do
        it 'message' do
          expect(json_response[:message]).to eq 'Enqueue success'
        end

        it 'empty array of errors' do
          expect(json_response[:errors]).to be_empty
        end
      end
    end

    describe 'with invalid params' do
      let(:params) { attributes_for(:contact_form).merge(name: nil) }

      it 'is unprocessed entity' do
        expect(response.status).to eql(422) # unprocessable_entity
      end

      context 'returns' do
        it 'not empty array of errors' do
          expect(json_response[:errors]).to be_a Array
          expect(json_response[:errors]).to be_any
        end

        it 'explained error message' do
          expect(json_response[:errors]).to include("Name can't be blank")
        end

        it 'message' do
          expect(json_response[:message]).to eq 'Format errors on validation'
        end
      end
    end
  end
end
