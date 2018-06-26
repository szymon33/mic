require 'rails_helper'

describe ContactForm do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:business_name) }
  it { is_expected.to validate_presence_of(:telephone_number) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to respond_to(:contact_time) }
  it { is_expected.to respond_to(:notes) }
  it { is_expected.to respond_to(:reference) }


  let(:contact) { build(:contact_form) }

  describe '.save' do
    it 'is truthy' do
      expect(contact.save).to be_truthy
    end

    it 'is falsey' do
      contact = build(:contact_form, name: nil)
      expect(contact.save).to be_falsey
    end
  end
end
