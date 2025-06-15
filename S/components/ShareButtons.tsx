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
    <div className="flex flex-col gap-2 items-end">
      <p className="flex-grow">Discuss on:</p>
      <div className="flex flex-row gap-4">
        <TwitterShareButton url={urlR} title={titleR}>
          <XIcon size={32} round />
        </TwitterShareButton>
        <FacebookShareButton url={urlR} title={titleR}>
          <FacebookIcon size={32} round />
          <FacebookShareCount url={urlR} />
        </FacebookShareButton>
        <EmailShareButton url={urlR} subject={titleR}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
}
