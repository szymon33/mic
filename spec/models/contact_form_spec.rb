require 'rails_helper'

describe ContactForm do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:business_name) }
  it { is_expected.to validate_presence_of(:telephone_number) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to respond_to(:contact_time) }
  it { is_expected.to respond_to(:notes) }
  it { is_expected.to respond_to(:reference) }
end
