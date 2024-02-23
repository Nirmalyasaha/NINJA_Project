import { FetchLandingPage } from "@/api/functions/cms.api";
import BannerAfterSec from "@/components/BannerAfterSec/BannerAfterSec";
import BannerSec from "@/components/BannerSec/BannerSec";
import FeatureSec from "@/components/FeatureSec/FeatureSec";
import Outdoor from "@/components/Outdoor/Outdoor";
import UseApp from "@/components/UseApp/UseApp";
import Wrapper from "@/layout/wrapper/Wrapper";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";




export default function Home() {


  const {data,isLoading,error}=useQuery({
    queryKey:["Landing Page"],
    queryFn:FetchLandingPage
  });
  console.log("Fetch Landing page ",data)





  return (
    <Wrapper>
      <BannerSec labelValue={data?.banner_text_1} bannerHeading={data?.banner_text_2} Heading3= {data?.banner_text_3} 
       PlayStoreUrl={"https://play.google.com/store/apps/details?id=com.whatsapp.w4b&hl=en&gl=TR"} 
      AppStoreUrl={"https://apps.apple.com/app"}>


        <Typography>     
        </Typography>
      </BannerSec>
      <BannerAfterSec  />
      <UseApp  useData={{...data}}/>
      <FeatureSec featureData={{...data}}/>
      <Outdoor   OutDoorData={{...data}}/>
    </Wrapper>
  );
}
