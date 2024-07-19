"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  TwitterShareButton,
  XIcon,
  EmailIcon,
  EmailShareButton,
} from "react-share";

type props = {
  urlR: string;
  titleR: string;
};

export default function ShareButtons({ urlR, titleR }: props) {
  return (
    <div className="flex flex-row gap-4">
      <p>Share to:</p>
      <FacebookShareButton url={urlR} title={titleR}>
        <FacebookIcon size={32} round />
        <FacebookShareCount url={urlR} />
      </FacebookShareButton>
      <TwitterShareButton url={urlR} title={titleR}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton url={urlR} subject={titleR}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}
