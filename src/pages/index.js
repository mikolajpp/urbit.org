import React from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";
import { Container, Main, Section, FatBlock } from "@urbit/fdn-design-system";
import IntraNav from "../components/IntraNav";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import NewsletterSignup from "../components/NewsletterSignup";
import Org from "../components/ecosystem/Org";

function CTAs({ className, links }) {
  return (
    <div className={"flex flex-wrap flex-row gap-2 " + className}>
      {links.map((link) => (
        <Link
          className="btn bg-primary hover:bg-secondary text-surface"
          href={link.url}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default function Home({}) {
  const post = {
    title: "Urbit",
    description: "A clean-slate OS and network for the 21st century.",
  };

  return (
    <Container>
      <Head>
        <title>urbit.org</title>
        {Meta(post, false, true)}
      </Head>
      <IntraNav />
      <Main className="text-primary" singleColumn>
        <h1 className="h0 heading mt-8 mb-64">
          Welcome to the sovereign internet.
        </h1>

        <Section divider={"border-primary"}>
          <h1 className="h1">
            Urbit is a new computing paradigm with complete ownership.
          </h1>
          <div className="body-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between bg-container rounded-lg p-4">
              <h3 className="text-on-container h-[6.5em] overflow-hidden">
                Leave the centralized internet behind. Run applications the
                sovereign way.
              </h3>
              <Link
                className="btn bg-on-container text-inverse-on-container hover:bg-on-container-variant w-min"
                href=""
              >
                Join the network
              </Link>
            </div>
            <div className="flex flex-col justify-between bg-container rounded-lg p-4">
              <h3 className="text-on-container h-[6.5em] overflow-hidden">
                Make your application sovereign with personal servers for you
                and your community.
              </h3>
              <Link
                className="btn bg-on-container text-inverse-on-container hover:bg-on-container-variant w-min"
                href=""
              >
                Build on Urbit
              </Link>
            </div>
          </div>
        </Section>

        <Section divider={"border-primary"}>
          <h2 className="h2">Why?</h2>
          <p className="h1">Own your computer in the ways that matter. </p>

          <FatBlock className="body-lg border border-primary rounded-lg">
            <table className="w-full table-fixed">
              <tbody>
                <tr className="border-b">
                  <td className="p-4 border-r">
                    <p>Data Ownership </p>
                    <p className="text-secondary">
                      Full command over applications and data
                    </p>
                  </td>
                  <td className="p-4">
                    <p>Privacy & Security </p>
                    <p className="text-secondary">
                      Decentralized storage for data confidentiality
                    </p>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 border-r">
                    <p>Persistent Identity </p>
                    <p className="text-secondary">
                      User controlled public-key infrastructure
                    </p>
                  </td>
                  <td className="p-4">
                    <p>Cost Predictability </p>
                    <p className="text-secondary">
                      Fixed hardware costs with no hidden fees
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-r">
                    <p>Network Resilience </p>
                    <p className="text-secondary">
                      Distributed servers avoid single points of failure
                    </p>
                  </td>
                  <td className="p-4">
                    <p>Reduced Platform Risk </p>
                    <p className="text-secondary">
                      Avoids third-party policy risks, ensuring continuous
                      operation
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </FatBlock>
        </Section>

        <Section divider={"border-primary"}>
          <h2 className="h2">Ecosystem</h2>
          <p className="h1">
            Explore one of the fastest growing developer ecosystems.
          </p>
          <div className="body-lg grid grid-cols-2 md:grid-cols-4 gap-4">
            <Org
              title="Tlon"
              description="Urbit core infrastructure"
              image="https://storage.googleapis.com/media.urbit.org/site/ecosystem/organizations/tlon.svg"
              slug="tlon"
              extended
            />
            <Org
              title="Native Planet"
              description="Urbit-centric hardware"
              image="https://storage.googleapis.com/media.urbit.org/site/ecosystem/organizations/native-planet.svg"
              slug="nativeplanet"
              extended
            />
            <Org
              title="Zorp"
              description="Computation with ZK proofs"
              image="https://storage.googleapis.com/media.urbit.org/site/ecosystem/organizations/zorp.svg"
              slug="zorp"
              extended
            />
            <Org
              title="~Tirrel Corp"
              description="Urbit product studio"
              image="https://storage.googleapis.com/media.urbit.org/site/ecosystem/organizations/tirrel.svg"
              slug="tirrel"
              extended
            />
          </div>
        </Section>

        <Section divider={"border-primary"}>
          <h2 className="h2">A New Compute Paradigm</h2>
          <p className="h1">Imagine an alternative computing paradigm.</p>
          <div
            className="w-full !my-16 md:!my-20 lg:!my-24"
            style={{ height: "calc(100vw * 0.5)" }}
          >
            <div
              className="h-full bg-primary"
              style={{
                WebkitMaskImage: "url(/images/compute-paradigm.svg)",
                WebkitMaskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                maskImage: "url(/images/compute-paradigm.svg)",
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
          <p className="h1">
            Urbit takes computing history in a different direction. Computing
            has evolved to become smaller and more virtual. With Urbit, your
            computer is entirely <strong>self-contained</strong>,{" "}
            <strong>digital</strong>, and <strong>cryptographic</strong>.
          </p>
          <p className="h1 italic">
            What if infrastructure got so good it simply disappeared?
          </p>
        </Section>

        <Section className="body-lg" divider={"border-primary"} narrow loose>
          <h2 className="h2">Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            convallis finibus tellus ut faucibus. Aenean luctus sapien vel
            turpis gravida, eget feugiat metus ornare.
          </p>

          <Section>
            <h2 className="h2">Follow</h2>
            <CTAs
              links={[
                { label: "Twitter", url: "https://twitter.com/urbit" },
                { label: "Instagram", url: "https://instagram.com/urbit" },
                {
                  label: "YouTube",
                  url: "https://www.youtube.com/channel/UCNYIS9_SktINCC9yqO4CFZw",
                },
                { label: "GitHub", url: "https://github.com/urbit" },
              ]}
            />
          </Section>

          <Section>
            <h2 className="h2">Boot and join us:</h2>
            <Link
              className="btn bg-primary hover:bg-secondary text-surface"
              href="https://urbit.org/groups/~bitbet-bolbel/urbit-community"
            >
              Urbit Community
            </Link>
          </Section>

          <Section>
            <h2 className="h2">Urbit Newsletter</h2>
            <NewsletterSignup />
          </Section>

          <Section>
            <h2 className="h2">Email</h2>
            <p>
              <Link
                className="hover:text-secondary"
                href="mailto: support@urbit.org"
              >
                support@urbit.org
              </Link>
              <br />
              <Link
                className="hover:text-secondary"
                href="mailto: grants@urbit.org"
              >
                grants@urbit.org
              </Link>
              <br />
              <Link
                className="hover:text-secondary"
                href="mailto: assembly@urbit.org"
              >
                assembly@urbit.org
              </Link>
              <br />
              <Link
                className="hover:text-secondary"
                href="mailto: newsletter@urbit.org"
              >
                newsletter@urbit.org
              </Link>
              <br />
              <Link
                className="hover:text-secondary"
                href="mailto: press@urbit.org"
              >
                press@urbit.org
              </Link>
            </p>
          </Section>
        </Section>
      </Main>
      <Footer />
    </Container>
  );
}
