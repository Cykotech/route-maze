import type { Metadata } from "next";
import { montserrat, roboto } from "../lib/fonts";

import "./globals.scss";

import { InstagramSVG } from "@/assets/svg/Instagram";
import { FacebookSVG } from "@/assets/svg/Facebook";
import { TwitterSVG } from "@/assets/svg/Twitter";
import { YoutubeSVG } from "@/assets/svg/Youtube";

export const metadata: Metadata = {
  title: "RouteMaze",
  description: "Powered by Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable}`}>
      <body>
        {children}
        <footer>
          <div className="companyContainer">
            <p>RouteMaze</p>
            <div className="socialContainer">
              <FacebookSVG />
              <TwitterSVG />
              <YoutubeSVG />
              <InstagramSVG />
            </div>
          </div>
          <div className="textContainer">
            <h3>Choice Destinations</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="textContainer">
            <h3>Travel Guides</h3>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
          </div>
          <div className="textContainer">
            <h3>About Us</h3>
              <ul>
                <li>Our Story</li>
                <li>Contact Us</li>
                <li>Careers</li>
              </ul>
          </div>
          <div className="textContainer"></div>
        </footer>
      </body>
    </html>
  );
}
