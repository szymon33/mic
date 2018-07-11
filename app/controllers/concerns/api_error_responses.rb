# frozen_string_literal: true

module APIErrorResponses
  def respond_not_found
    render json: {
      errors: [{ message: 'Not found.' }],
      status: '404', title: 'Not found'
    }, status: :not_found
  end

  def respond_unprocessable_entity(errors = ['No params provided'])
    render json: {
      errors: errors.map do |error|
        { message: error }
      end,
      status: '422', title: 'Unprocessable entity'
    }, status: :unprocessable_entity
  end
end
