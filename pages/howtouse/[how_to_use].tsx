import { useQuery } from "react-query";
import { FetchCmsDetail } from "@/api/functions/cms.api";
import axiosInstance from "@/api/axiosInstance";
import { useRouter } from "next/router";
import { endpoints } from "@/api/endpoints";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export interface HWTtypes {
  statusCode: number
  message: string
  data: Data
}

export interface Data {
  title: string
  content: string
  image: string
}




export default function HWT(){
   

  const router =useRouter();

  const {how_to_use}=router.query

     
  const {data} = useQuery({
    queryKey:["DETAIL",{how_to_use}],
    queryFn :async()=>{
      const res = await axiosInstance.get<HWTtypes>(endpoints.cms.details(`${how_to_use}`))
         //console.log ("responce details ",res)
             return res.data.data

    }
  })
  console.log("data details",data)


return (
  <>
<Wrapper>
      <Container fixed>
        
          <Box className="title_block">
            <Typography variant="h1">
           {data?.title}
              <Typography variant="caption" className="red_span">
                Policy
              </Typography>
            </Typography>
          </Box>
          <Box className="terms_content">
          
           
      
        
            <p>
              Transfer Of Data
              <br></br>
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ than those from your jurisdiction.
            </p>
            <p>
              If you are located outside United States and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to United States and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </p>
            <p>
              The Abundant Kindness Trust will take all steps reasonably
              necessary to ensure that your data is treated securely and in
              accordance with this Privacy Policy and no transfer of your
              Personal Data will take place to an organization or a country
              unless there are adequate controls in place including the security
              of your data and other personal information.
              <br></br>
              Disclosure Of Data
              <br></br>
              Legal Requirements
            </p>
            <p>
              The Abundant Kindness Trust may disclose your Personal Data in the
              good faith belief that such action is necessary to:
              <br></br>
              To comply with a legal obligation
              <br></br>
              To protect and defend the rights or property of The Abundant
              Kindness Trust
              <br></br>
              To prevent or investigate possible wrongdoing in connection with
              the Service
              <br></br>
              To protect the personal safety of users of the Service or the
              public
              <br></br>
              To protect against legal liability
            </p>
            <p>
              {" "}
              Security Of Data
              <br></br>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
            <p>
              Service Providers
              <br></br>
              We may employ third party companies and individuals to facilitate
              our Service (“Service Providers”), to provide the Service on our
              behalf, to perform Service-related services or to assist us in
              analyzing how our Service is used. These third parties have access
              to your Personal Data only to perform these tasks on our behalf
              and are obligated not to disclose or use it for any other purpose.
              <br></br>
              Analytics
            </p>
            <p>
              We may use third-party Service Providers to monitor and analyze
              the use of our Service.
              <br></br>
              Google Analytics
              <br></br>
              Google Analytics is a web analytics service offered by Google that
              tracks and reports website traffic. Google uses the data collected
              to track and monitor the use of our Service. This data is shared
              with other Google services. Google may use the collected data to
              contextualize and personalize the ads of its own advertising
              network.
            </p>
            <p>
              You can opt-out of having made your activity on the Service
              available to Google Analytics by installing the Google Analytics
              opt-out browser add-on. The add-on prevents the Google Analytics
              JavaScript (ga.js, analytics.js, and dc.js) from sharing
              information with Google Analytics about visits activity. For more
              information on the privacy practices of Google, please visit the
              Google Privacy & Terms web page:{" "}
              <Link href="https://policies.google.com/privacy?hl=en">
                https://policies.google.com/privacy?hl=en
              </Link>
            </p>
            <p>
              Links To Other Sites
              <br></br>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third party link, you will be directed to
              that third party’s site. We strongly advise you to review the
              Privacy Policy of every site you visit. We have no control over
              and assume no responsibility for the content, privacy policies or
              practices of any third party sites or services. Children’s Privacy
            </p>
            <p>
              Our Service does not address anyone under the age of 18
              (“Children”). We do not knowingly collect personally identifiable
              information from anyone under the age of 18. If you are a parent
              or guardian and you are aware that your Children have provided us
              with Personal Data, please contact us. If we become aware that we
              have collected Personal Data from children without verification of
              parental consent, we take steps to remove that information from
              our servers.
            </p>
            <p>
              Changes To This Privacy Policy
              <br></br>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update the
              “effective date” at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page. Contact Us
              <br></br>
              If you have any questions about this Privacy Policy, please
              contact us:
              <br></br>
              By email: support@outdoors.ninja
            </p>
          </Box>
        
      </Container>
    </Wrapper>
  </>
)
}