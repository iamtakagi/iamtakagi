import React from "react";
import { Accounts } from "../components/contents/Accounts";
import { Developments } from "../components/contents/Developments";

const IndexPage: React.VFC<{}> = () => {

  return (
    <div>
      <div className="desc w-full my-6 space-y-1 text-left">
        <p className="text-sm">プログラミングとゲームとアニメと音楽が好き。</p>
      </div>

      <Accounts/>
      <Developments/>

      <div className="desc w-full my-6 space-y-1 text-left">
        <p className="text-lg">Contact / 連絡</p>
        <p className="text-sm">
          ご依頼承ります。依頼の内容によってはお断りさせて頂く場合もございますが、お気軽にご相談ください。
        </p>
        <p className="text-sm">E-Mail: iamtakagi.contact@gmail.com</p>
      </div>
    </div>
  );
};

export default IndexPage;
