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
              <li>Napa Valley, California</li>
              <li>St. Augustine, Florida</li>
              <li>Aspen, Colorado</li>
              <li>New Orleans, Louisiana</li>
            </ul>
          </div>
          <div className="textContainer">
            <h3>Travel Guides</h3>
            <ul>
              <li>
                <a
                  href="https://medium.com/@samanthasmith1534/an-adventure-to-napa-valley-and-sonoma-61f41682b5ef"
                  target="_blank">
                  Wine Tasting
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/sunday-drives-usa/st-augustine-florida-a-step-back-in-time-582fd69c560f"
                  target="_blank">
                  Historical Sites
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@EGaff11/chasing-the-local-vibe-at-aspen-highland-dd124061264d"
                  target="_blank">
                  Skiing
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@fjmakki/travel-48-hours-in-new-orleans-the-foodie-edition-9f7ce4e9820c"
                  target="_blank">
                  Culinary Culture
                </a>
              </li>
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
