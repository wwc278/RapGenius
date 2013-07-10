10.times do
  Song.create(lyrics:Faker::Lorem.paragraphs.join("\r\n\r\n"), 
    title:Faker::Lorem.word, 
    artist:Faker::Lorem.word)
end