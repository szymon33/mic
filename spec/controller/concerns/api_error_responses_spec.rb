require 'rails_helper'

describe APIErrorResponses, type: :controller do

  controller(ApplicationController) do
    include APIErrorResponses

    def not_found; respond_not_found; end
    def unprocessable_entity; respond_unprocessable_entity; end
  end

  before { routes.draw {
    get :not_found, to: 'anonymous#not_found'
    get :unprocessable_entity, to: 'anonymous#unprocessable_entity'
  } }

  let(:subject) { json_response }

  describe '#respond_not_found' do
    before do
      get :not_found
    end

    it { is_expected.to include(errors: [{ message: 'Not found.' }]) }
    it { is_expected.to include(status: '404') }
    it { is_expected.to include(title: 'Not found') }

    it 'is not found' do
      expect(response.status).to eq 404 # not_found
    end
  end

  describe '#respond_unprocessable_entity' do
    before do
      get :unprocessable_entity
    end

    it { is_expected.to include(errors: [{ message: 'No params provided' }]) }
    it { is_expected.to include(status: '422') }
    it { is_expected.to include(title: 'Unprocessable entity') }

    it 'is not found' do
      expect(response.status).to eq 422 # unprocessable_entity
    end
  end
end

