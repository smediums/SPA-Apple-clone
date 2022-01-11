import React from "react";

function HomeFooter() {
  return (
    <article className="generalInfo">
      <p>
        To access and use all the features of Apple Card, you must add Apple
        Card to Wallet on an iPhone or iPad with the latest version of iOS or
        iPadOS. Update to the latest version by going to Settings {">"}
        General {">"} Software Update. Tap Download and Install.
      </p>
      <p>Available for qualifying applicants in the United States.</p>
      <p>
        Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
      </p>
      <p>
        Learn more about how Apple Card applications are evaluated at
        <span className="footerLink"> support.apple.com/kb/HT209218.</span>
      </p>
      <p>
        Apple TV+ is $4.99/month after free trial. One subscription per Family
        Sharing group. Offer good for 3 months after eligible device activation.
        Plan automatically renews until cancelled. Restrictions and other{" "}
        <span className="footerLink">terms</span> apply.
      </p>
    </article>
  );
}

export default HomeFooter;
