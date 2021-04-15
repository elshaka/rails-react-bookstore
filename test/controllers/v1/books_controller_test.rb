require 'test_helper'

class V1::BooksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get v1_books_index_url
    assert_response :success
  end

end
