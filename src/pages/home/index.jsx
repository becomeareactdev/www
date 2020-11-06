import React from "react"
import Layout from "../../components/layout"

import Ship from "./ship"
import Yuck from "./yuck"
import Basics from "./basics"
import MailingList from "./mailing-list"
import EaPricing from "./ea-pricing"
import ProgPricing from "./prog-pricing"
import CourseOutline from "./course-outline"
import Mark from "./mark"

import "./styles.css"

export default function Home() {
  return (
    <Layout>
      <Ship className="dk-bg" />
      <Yuck className="md-bg" />
      <Basics className="dk-bg" />
      <MailingList
        className="md-bg"
        emailPlaceholder="Where can I email you?"
        submitText="Please give me free, early access!"
        heading="KEEP ME IN THE LOOP!"
        text="I haven’t launched just yet, but you can get access to the first few chapters FREE when I release them!"
      />
      <EaPricing className="dk-bg" />
      <ProgPricing className="md-bg" />
      <CourseOutline />
      <MailingList
        className="md-bg"
        emailPlaceholder="What is your email?"
        submitText="Send me launch updates!"
        heading="OK, Let’s get started"
        text="Sign up for the mailing list and get updates so you don’t miss the launch pricing!"
      />
      <Mark />
      <MailingList
        className="dk-bg"
        emailPlaceholder="Where should I send your discount?"
        submitText="I am ready to level-up"
        heading="Take your first step!"
        text="Early supporters get major discounts on the course material"
      />
    </Layout>
  )
}
