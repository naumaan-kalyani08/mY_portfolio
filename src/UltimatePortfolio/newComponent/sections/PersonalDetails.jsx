import React from "react";
import { SectionButton } from "../components/ReusableComponents";
import { Timeline } from "antd";
import '../style/Responsive.css'
const PersonalDetails = () => {
  return (
    <section>
      <SectionButton btnText="Personal Info" />
      <Timeline className="personal-details-timeline">
        <Timeline.Item>Full Name :Kalyani Naumaan Khan Amin </Timeline.Item>
        <Timeline.Item>Date Of Birth :8th March 2002 </Timeline.Item>
        <Timeline.Item>Age:22 </Timeline.Item>
        <Timeline.Item>Religion:<span> Muslim (Sunni) </span></Timeline.Item>
        <Timeline.Item>Profession:<span> As you can see A Web Developer &#128516; </span></Timeline.Item>
        {/* <Timeline.Item><span> Muslim (Sunni) </span></Timeline.Item> */}
        {/* <Timeline.Item>Step 3: Test application</Timeline.Item>
        <Timeline.Item>Step 4: Deploy application</Timeline.Item> */}
      </Timeline>
    </section>
  );
};

export default PersonalDetails;
