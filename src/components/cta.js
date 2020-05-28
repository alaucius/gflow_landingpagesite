import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="What's Next?"
      description="Help shape the future of our platform by sharing your opinion!"
    />
    <form action="https://forms.gle/Q71vLga7LeKvpJ5K7">
      <Button>Take the Survey</Button>
    </form>
  </div>
)

export default CallToAction
