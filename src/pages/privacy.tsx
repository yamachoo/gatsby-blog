import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPage: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout sitePath={path}>
      <SEO title="Privacy policy" />
      <div className="article__title">
        <p>2020.07.13</p>
        <h1>Privacy policy</h1>
      </div>
      <div className="article__content">
        <p>
          本文書は、当サイト（Yamablog）における個人情報の保護およびその適切な取り扱いについての方針を示したものです。
        </p>
        <h3>当サイトに掲載されている広告に関して</h3>
        <p>
          当サイトでは、第三者配信の広告サービス（Googleアドセンス、Amazonアソシエイト、A8.net）を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報「Cookie」(氏名、住所、メール
          アドレス、電話番号は含まれません)を使用することがあります。
          <br />
          またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
          <a
            href="https://www.google.com/adsense/localized-terms?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            Googleアドセンス オンライン利用規約
          </a>
          をご覧ください。
        </p>
        <h3>当サイトが利用しているアクセス解析ツールに関して</h3>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
          <br />
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは
          <a
            href="https://www.google.com/analytics/terms/jp.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google アナリティクス利用規約
          </a>
          をご覧ください。
        </p>
        <h3>当サイトへのリンクに関して</h3>
        <p>
          当サイトは完全リンクフリーです。トップページ、記事など、正規に公開しているページであれば、どのページにリンクしていただいても問題ありません。ただしインラインフレームの使用や、画像への直リンクなどは禁止させて頂いております。
        </p>
        <h3>免責事項</h3>
        <p>
          当サイトに掲載する情報は記事公表時点の正しいものを提供するよう努めております。ただし、提供している情報、リンク先などにより、いかなる損失や損害などの被害が発生しても当サイトでは責任を負いかねますので、ご了承ください。
          <br />
          リンク先の商品は当サイトが販売しているのではなく、各リンク先店舗での販売となります。購入方法、その他お問い合わせは各店舗までご確認ください。商品購入に関するトラブルに関しては、当サイトでは責任を負いかねますのでご了承ください。
        </p>
        <h3>著作権について</h3>
        <p>
          当サイトに掲載されている情報についての著作権は放棄しておりません。当サイト記事からの引用に関しましては「引用元の明示」によって無償で引用頂けます。
          <br />
          ただし、全文転載はお断りいたしております。引用許可範囲についても、事前予告なくこれを変更する事があります。また、当サイトのRSSを利用し、コンテンツをそのまま盗用することも禁止しています。
        </p>
      </div>
    </Layout>
  )
}

export default PrivacyPage
