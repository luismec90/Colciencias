require 'test_helper'

class VideosControllerTest < ActionController::TestCase
  test "should get col" do
    get :col
    assert_response :success
  end

end
