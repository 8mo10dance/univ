# frozen_string_literal: true

history_params = [
  { 'updatedAt': '2019/03/02', 'description': 'トップページのレイアウトを変更' },
  { 'updatedAt': '2018/12/30', 'description': 'Alice6をLinkに追加' },
  { 'updatedAt': '2018/12/30', 'description': '作品データベースをLinkに追加' },
  { 'updatedAt': '2018/9/17', 'description': 'デジモンサヴァイブをLinkに追加' },
  { 'updatedAt': '2018/7/21', 'description': 'Webpack設定を更新' },
  { 'updatedAt': '2018/7/21', 'description': 'Emacsキーバインドを追加' },
  { 'updatedAt': '2018/7/20', 'description': 'UpdateHistoryの文字コードを変更' },
  {
    'updatedAt': '2018/7/20',
    'description': 'ナレッジ集にEmacsキーバインド備忘録を追加',
  },
  { 'updatedAt': '2018/6/24', 'description': 'ナレッジ集にWebpack設定を追加' },
  { 'updatedAt': '2018/6/24', 'description': 'SICPをLinkに追加' },
  {
    'updatedAt': '2018/6/24',
    'description': 'ナレッジ集にRSpecのセットアップログを追加',
  },
  {
    'updatedAt': '2018/6/24',
    'description': 'ナレッジ集にUbuntu on WSLのセットアップログを追加',
  },
  { 'updatedAt': '2018/6/24', 'description': 'ナレッジ集をLinkに追加' },
  {
    'updatedAt': '2018/5/19',
    'description': 'デジモンアドベンチャークローンサイトをLinkに追加',
  },
  { 'updatedAt': '2017/4/16', 'description': 'トップページリニューアル！' },
  { 'updatedAt': '2015/3/10', 'description': 'サイトを一部修正。Linkを更新' },
  { 'updatedAt': '2014/12/16', 'description': 'サイトを一部修正。Linkを更新' },
  { 'updatedAt': '2014/9/13', 'description': 'サイトを一部修正' },
  { 'updatedAt': '2014/9/6', 'description': 'トップページ更新' },
  { 'updatedAt': '2014/8/23', 'description': 'Linkを更新' },
  { 'updatedAt': '2014/7/30', 'description': 'Linkを更新' },
  { 'updatedAt': '2014/7/19', 'description': 'Linkを更新' },
  { 'updatedAt': '2014/7/18', 'description': 'トップページ更新＆Link更新' },
  { 'updatedAt': '2014/7/8', 'description': 'Linkを変更' },
  { 'updatedAt': '2014/5/4', 'description': 'Linkを変更' },
  { 'updatedAt': '2014/4/25', 'description': 'Linkを変更' },
  { 'updatedAt': '2014/4/20', 'description': 'アプリページ、リンクページを作製' },
  { 'updatedAt': '2014/4/19', 'description': 'サイトオープン＆トップページ作製' },
]

history_params.reverse_each do |param|
  Digiweb::UpdateHistory.create!(update_date: param[:updatedAt], description: param[:description])
end

menu_list_params = [
      {
        name: 'Application',
        items: [
          { name: 'Anicode for WEB', url: '#' },
          { name: 'MangaCode', url: 'http://wcdxm.webcrow.jp/MangaCode.php' },
        ],
      },
      {
        name: 'Link',
        items: [
          {
            name: 'Leopard-Raws',
            url: 'http://jp.leopard-raws.org/',
          },
          {
            name: 'w3',
            url: 'http://validator.w3.org/',
          },
          {
            name: 'SICP',
            url:
              'http://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html',
          },
          {
            name: 'デジモンサヴァイブ',
            url: 'https://digimon-sur.bn-ent.net/',
          },
          {
            name: '作品データベース',
            url: 'https://sakuhindb.com/',
          },
          {
            name: 'Alice 6',
            url: 'http://www.konaka.com/index.shtml',
          },
        ],
      },
    ]
