import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./Experiences.css";

function Experiences() {
  return (
    <body id="experiences-body">
      <div className="app">
        <NavigationBar />
        <header className="post-header">
          <h1 className="post-title">Experiences</h1>
        </header>

        <div className="post-content">
          <h3 id="undergraduate-researcher-lsu-mobile-device-security-lab">
            Undergraduate Researcher,{" "}
            <a href="https://csc.lsu.edu/~chenwang/" target="_blank" rel="noreferrer">
              LSU Mobile Device Security Lab
            </a>
          </h3>
          <ul>
            <li>
              <em>August 2022 – Present</em>
            </li>
            <li>
              Collaborated closely with professors and PhD students to design
              and execute experiments using Software Defined Radio (SDR) devices
              and Linux systems to capture and analyze radio signals, with a
              focus on the privacy implications of trackers like Airtags.
            </li>
            <li>
              Led an analysis of sound leakage from bone conduction headphones,
              assessing potential privacy concerns.
            </li>
            <li>
              Utilized MATLAB extensively to process and analyze complex data
              sets, both in the investigation of GPS tracker privacy
              implications and sound leakage.
            </li>
          </ul>

          <h3 id="software-engineer-intern-chevron">
            Software Engineer Intern,{" "}
            <a href="https://www.Chevron.com" target="_blank" rel="noreferrer">
              Chevron
            </a>
          </h3>
          <ul>
            <li>
              <em>May 2023 – August 2023</em>
            </li>
            <li>
              Led the development of LAS and DLIS file scrapers using Python,
              adhering to Agile methodology and industry best practices.
            </li>
            <li>
              Demonstrated exceptional problem-solving skills by extracting
              comprehensive DLIS file information, enhancing the company’s data
              processing capabilities.
            </li>
            <li>
              Innovated tools for accelerated data integration, giving Chevron a
              competitive edge in exploration activities.
            </li>
            <li>
              Collaborated seamlessly with stakeholders in an Agile environment,
              earning recognition from product owners and business users for
              delivering top-tier solutions.
            </li>
            <li>
              Implemented parallel-processing techniques, significantly
              optimizing scraper performance.
            </li>
            <li>
              Conducted comprehensive unit testing to ensure code robustness and
              utilized Azure DevOps for streamlined CI/CD processes.
            </li>
            <li>
              Forecasted to contribute to multi-million-dollar monetary benefits
              for Chevron through enhanced exploration efficiency and data
              processing.
            </li>
          </ul>

          <h3 id="software-engineer-intern-chevron-1">
            Software Engineer Intern,{" "}
            <a href="https://www.Chevron.com" target="_blank" rel="noreferrer">
              Chevron
            </a>
          </h3>
          <ul>
            <li>
              <em>May 2022 – August 2022</em>
            </li>
            <li>
              Interacted with key stakeholders, product owners, and business
              leads to understand business requirements and processes.
            </li>
            <li>
              Worked in an Agile environment with a team of developers, on-shore
              and off-shore, to make high-value enhancements to the frontend and
              backend.
            </li>
            <li>
              Developed production-ready features with MVC architecture using
              Angular, TypeScript, SQL, GraphQL, and NodeJS to enhance
              replenishment planning functionality.
            </li>
            <li>
              Developed a strong understanding of cloud computing concepts and
              technologies such as IaaS, PaaS, SaaS, Azure architecture, and
              Azure DevOps.
            </li>
            <li>
              Identified inefficiencies with the code release process and worked
              with the development team to create a new release process,
              resulting in fewer code merging and deployment issues.
            </li>
          </ul>

          <h3 id="skills--certifications">Skills &amp; Certifications</h3>

          <ul>
            <li>
              <strong>Technical Skills:</strong> Java, Python, C++, JavaScript,
              TypeScript, Flutter, GraphQL, SQL, Bash, Angular, Git, Agile,
              Google Cloud, Microsoft Azure.
            </li>
            <li>
              <strong>Certifications:</strong>
              <ul>
                <li>
                  <a
                    href="https://learn.microsoft.com/en-us/users/adityasrivastava-8756/credentials/4f4f740650d0295f"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Microsoft Azure Fundamentals (AZ-900)
                  </a>
                </li>
                <li>
                  <a
                    href="https://learn.microsoft.com/en-us/users/adityasrivastava-8756/credentials/e6730455efc26e16"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Microsoft Azure Administrator (AZ-104)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.credential.net/15ce8099-7e83-47f6-8c85-e47f1b965333?key=911e28d652066c1b6a9c298d9020eebfed64b2b65d3c657536e054022635f296&amp;trk=public_profile_see-credential"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Cloud Certified: Cloud Digital Leader
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.credly.com/badges/b0c96cf2-8059-4382-856e-f5211b13b0fc/public_url"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AWS Certified Cloud Practitioner (CLF-C02)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <footer id="experiences-footer-note-1">
          <p>Aditya Srivastava © 2024</p>
        </footer>
      </div>
    </body>
  );
}

export default Experiences;
