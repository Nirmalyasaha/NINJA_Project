/* eslint-disable react/no-array-index-key */
import { CmsListTypes, FetchCmsData, FetchLandingPage } from "@/api/functions/cms.api";
import { LandingPageInterFace } from "@/interface/landingPageInterFace";
import { primaryColors } from "@/themes/_muiPalette";
import ClientIcon from "@/ui/Icons/ClientIcon";
import InfoIcon from "@/ui/Icons/InfoIcon";
import TrustIcon from "@/ui/Icons/TrustIcon";
import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

export const BannerAfterSecWrapper = styled(Box)`
  padding-top: 150px;
  position: relative;
  z-index: 10;
  @media (max-width: 1499px) {
    padding-top: 100px;
  }
  @media (max-width: 899px) {
    padding-top: 80px;
  }
`;
export const EachCardWrapper = styled(Box)`
  padding: 80px 30px;
  background: ${primaryColors?.color383838};
  box-shadow: 0px 14.19px 43.66px rgba(0, 0, 0, 0.13);
  border-radius: 15px;
  @media (max-width: 899px) {
    padding: 30px 30px;
    margin-top: 20px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .poly_gon {
    margin-bottom: 50px;
    margin-top: -115px;
    @media (max-width: 899px) {
      margin-bottom: 0px;
      margin-top: -60px;
    }
  }
`;

interface cardProps extends BoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
 //bannerData:LandingPageInterFace
}

export const EachCard: React.FC<cardProps & BoxProps> = ({
  title,
  description,
 // bannerData,
  icon,
  ...props
}) => {
  return (
    <EachCardWrapper {...props}>
      {/* <Typography variant="caption" className="poly_gon"> */}
        
      {/* </Typography>
      <Typography variant="h3" ><Link href={`/howtouse/${slug}`}>{title}</Link></Typography>
      <Typography >{slug}</Typography> */}
    </EachCardWrapper>
  );
};

interface props extends BoxProps {}

const BannerAfterSec: React.FC<props & BoxProps> = ({ ...props }) => {

  const {data}=useQuery({
    queryKey:["Fetch Landing"],
    queryFn:FetchLandingPage
  });
  console.log("data of 3 text",data)
  



  const cardList = [
    {
      icon: <InfoIcon />,
      title:data?.box_1_header,
      description:data?.box_1_text
       
    },
    {
      icon: <ClientIcon />,
      title: data?.box_2_text,
      description:data?.box_2_text
        
    },
    {
      icon: <TrustIcon />,
      title: data?.box_3_header,
      description:data?.box_3_text
        
    }
  ];



//  const {data,isLoading,error}=useQuery({
//     queryKey:["CMS LIST"],
//     queryFn:FetchCmsData
//   })
 // console.log("List Data",data)
 


  return (
    <BannerAfterSecWrapper {...props}>
      <Container fixed>
        <Grid
          container
          columnSpacing={{ md: 4, xs: 0 }}
          rowSpacing={{ md: 0, xs: 3 }}
        >
          
              {  cardList.map((item, index) => (
            <Grid item md={4} xs={12} key={index}>
                <EachCardWrapper {...props}>
                  <Typography variant="caption" className="poly_gon">
                    {item.icon}
                  </Typography>               
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography>{item.description}</Typography>
                </EachCardWrapper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BannerAfterSecWrapper>
  );
};

export default BannerAfterSec;
