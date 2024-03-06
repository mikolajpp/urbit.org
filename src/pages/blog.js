import React from "react";
import Head from "next/head";
import {
  Container,
  Main,
  Section,
  FatBlock,
  getAllPosts,
} from "@urbit/fdn-design-system";
import IntraNav from "@/components/IntraNav";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import PostCard from "@/components/PostCard";

export default function Blog({ posts, search }) {
  const post = {
    title: "Blog",
    description:
      "Stories from the broader Urbit community, the Urbit Foundation, and the many people contributing to Urbit.",
  };

  return (
    <Container>
      <Head>
        <title>{`${post.title} • urbit.org`}</title>
        {Meta(post)}
      </Head>
      <IntraNav />
      <Main className="text-primary" singleColumn>
        <section>
          <h1 className="h1 mt-12 mb-8 md:mt-16 md:mb-16 lg:mb-20">Blog</h1>
          <p className="h1">
            Stories from the broader <strong>Urbit community</strong>, the Urbit Foundation, and
            the many <strong>people</strong> contributing to Urbit.
          </p>
        </section>
        <Section divider={"border-primary"}>
          <FatBlock>
            <div
              className={
                "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 " +
                "gap-1 lg:gap-6 xl:gap-8"
              }
            >
              {posts.map((post) => (
                <PostCard href={`/blog/${post.slug}`} {...post} />
              ))}
            </div>
          </FatBlock>
        </Section>
      </Main>
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(
    ["title", "slug", "date", "description", "tags", "extra"],
    "blog",
    "date"
  );

  return {
    props: { posts },
  };
}
