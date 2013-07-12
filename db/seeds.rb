10.times do
  Song.create(lyrics:Faker::Lorem.paragraphs(10).join("\r\n\r\n"), 
    title:Faker::Lorem.word, 
    artist:Faker::Lorem.word)
end

User.create(email:'will@chan.com', password:'willchan')