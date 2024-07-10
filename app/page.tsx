import Linkify from "linkify-react";
import React from "react";

interface RenderProps {
  attributes: React.HTMLProps<HTMLAnchorElement>;
}

const Home = () => {
  // 共通のレンダリング関数
  function renderLink(content: string, className: string) {
    const LinkComponent: React.FC<RenderProps> = ({ attributes }) => (
      <a {...attributes} style={{ textDecoration: "none" }}>
        <div className={className}>
          <span>{content}</span>
        </div>
      </a>
    );
    LinkComponent.displayName = `LinkComponent(${content})`;
    return LinkComponent;
  }

  // Linkify コンポーネントに渡すオプションの作成
  const createOptions = (content: string, className: string) => ({
    defaultProtocol: "https",
    target: "_blank",
    render: renderLink(content, className),
  });

  const xoptions = createOptions("x", "link-container");
  const instoptions = createOptions("Instagram", "link-container-inst");

  const x = "https://x.com/?lang=ja";
  const inst = "https://www.instagram.com/";

  return (
    <div>
      <h2 className="font-bold" style={{ fontSize: "20px", margin: "3%" }}>
        My Acount
      </h2>
      <Linkify options={xoptions}>{x}</Linkify>
      <p style={{ margin: "30px" }}></p>
      <Linkify options={instoptions}>{inst}</Linkify>
    </div>
  );
};

Home.displayName = "Home";

export default Home;
