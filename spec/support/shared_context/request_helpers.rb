def post_json(path, data)
  headers = { 'Content-Type' => 'application/json' }
  post("/api/#{path}", params: data.to_json, headers: headers)
end
