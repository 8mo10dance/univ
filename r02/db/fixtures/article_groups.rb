# frozen_string_literal: true

Dir.entries(Rails.root.join('public/articles')).each do |filename|
  next unless filename =~ /.json$/

  json = JSON.parse(
    File.open(Rails.root.join('public', 'articles', filename), 'r').read,
  )
  year = 2014
  month = filename.split('').take(2).join('').to_i
  day = filename.split('').take(4).drop(2).join('').to_i

  ArticleGroup.transaction do
    article_group = ArticleGroup.new

    json.each do |v|
      article = article_group.articles.build(
        title: v['title'],
        published_at: Date.new(year, month, day),
      )
      article.article_items.build(v['list'].map { |item| { text: item } })
    end
    article_group.save!
  end
end
