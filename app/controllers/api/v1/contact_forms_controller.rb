# frozen_string_literal: true

module API
  module V1
    class ContactFormsController < API::V1::BaseController
      def create
        render json: {}, status: :created
      end
    end
  end
end
