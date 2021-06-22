import * as React from "react";

export const Contact: React.VFC<{}> = () => {
  return (
    <div className="desc w-full my-6 space-y-1 text-left">
      <p className="text-lg">Contact / 連絡</p>
      <p className="text-sm">
        ご依頼承ります。依頼の内容によってはお断りさせて頂く場合もございますが、お気軽にご相談ください。
      </p>
      <p className="text-sm">E-mail: iamtakagi.contact@gmail.com</p>
      <p className="text-sm">
        DM: Discord もしくは Twitter であれば最速で応答します。
      </p>
    </div>
  );
};
