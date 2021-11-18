import React from "react";
import { Link } from "react-router-dom";
import AccordionItem from "./AccordionItem";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <article className="generalInfo">
          <p>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings {">"}
            General {">"} Software Update. Tap Download and Install.
          </p>
          <p>Available for qualifying applicants in the United States.</p>
          <p>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
          </p>
          <p>
            Learn more about how Apple Card applications are evaluated at
            <span className="footerLink"> support.apple.com/kb/HT209218.</span>
          </p>
          <p>
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <span className="footerLink">terms</span> apply.
          </p>
        </article>
        <article className="flexAccordion">
          <AccordionItem
            heading="Shop and Learn"
            listItems={[
              "Store",
              "Mac",
              "iPad",
              "iPhone",
              "Watch",
              "Airpods",
              "TV & Home",
              "iPod touch",
              "AirTag",
              "Acessories",
              "Gift Cards",
            ]}
          />
          <AccordionItem
            heading="Services"
            listItems={[
              "Apple Music",
              "Apple TV+",
              "Apple Fitness+",
              "Apple News+",
              "Apple Arcade",
              "iCloud",
              "Apple One",
              "Apple Card",
              "Apple Books",
              "Apple Podcasts",
              "App Store",
            ]}
          />
          <AccordionItem
            heading="Account"
            listItems={[
              "Manage Your Apple ID",
              "Apple Store Account",
              "iCloud.com",
            ]}
          />
          <AccordionItem
            heading="Apple Store"
            listItems={[
              "Find a Store",
              "Genius bar",
              "Today at Apple",
              "Apple Camp",
              "Apple Store App",
              "Refurbished and Clearance",
              "Financing",
              "Apple Trade In",
              "Order Status",
              "Shopping Help",
            ]}
          />
          <AccordionItem
            heading="For Business"
            listItems={["Apple and Business", "Shop for Business"]}
          />
          <AccordionItem
            heading="For Education"
            listItems={[
              "Apple and Education",
              "Shop for K-12",
              "Shop for College",
            ]}
          />
          <AccordionItem
            heading="For Healthcare"
            listItems={[
              "Apple in Healthcare",
              "Health on Apple Watch",
              "health records on iPhone",
            ]}
          />
          <AccordionItem
            heading="For Government"
            listItems={[
              "Shop for Government",
              "Shop for Veterans and Military",
            ]}
          />
          <AccordionItem
            heading="Apple Values"
            listItems={[
              "Accessibility",
              "Education",
              "Environment",
              "Inclusion and Diversity",
              "Privacy",
              "Racial Equity and Justice",
              "Supplier Responsibility",
            ]}
          />
          <AccordionItem
            heading="About Apple"
            listItems={[
              "Newsroom",
              "Apple Leadership",
              "Career Opportunities",
              "Investors",
              "Ethics & Compliance",
              "Events",
              "Contact Apple",
            ]}
          />
        </article>
        <p className="shopOpts">
          More ways to shop: <span>Find an Apple Store</span> or{" "}
          <span>other retailer</span> near you. Or call 1-800-MY-APPLE.
        </p>
        <Link className="country" to="/country">
          United States
        </Link>
        <p className="copyright">
          Copyright © 2021 Apple Inc. All rights reserved.
        </p>
        <div className="companyInsight">
          <Link className="portal" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="portal" to="/useTerms">
            Terms of Use
          </Link>
          <Link className="portal" to="/transactions">
            Sales and Refunds
          </Link>
          <Link className="portal" to="/legal">
            Legal
          </Link>
          <Link className="portal" to="/locations">
            Site Map
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
