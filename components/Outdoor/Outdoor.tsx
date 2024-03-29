import { Data } from "@/interface/landingPageInterFace";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import { Box, BoxProps, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const OutdoorWrap = styled(Box)`
  .outDoor_outr {
    background-color: ${primaryColors.secondary};
    padding: 52px 65px;

    border-radius: 50px;
    @media (max-width: 599px) {
      padding: 25px;
    }
    h2 {
      margin-bottom: 10px;
      span {
        color: ${primaryColors.primary};
        display: inline-block;
        font-weight: 700;
      }
    }
    .out_lft {
      margin-top: 55px;
      @media (max-width: 899px) {
        margin-top: 0px;
        margin-bottom: 25px;
      }
      p {
        max-width: 500px;
      }
    }
  }
  .form_grp {
    margin-bottom: 15px;
    button {
      padding: 26px 45px;
      @media (max-width: 600px) {
        padding: 20px 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`;

interface outDoorProps extends BoxProps{

  OutDoorData:Data
}



export default function Outdoor({OutDoorData,...props}:outDoorProps) {
  return (
    <OutdoorWrap {...props}>
      <Container fixed>
        <Box className="outDoor_outr">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box className="out_lft">
                <Typography variant="h2">
                  <span>{OutDoorData?.contact_hdr?.slice(6,18)} </span> {OutDoorData?.contact_hdr?.slice(25)}
                </Typography>
                <Typography variant="body1">
                 {OutDoorData?.contact_content}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <form>
                <Box className="out_rgt">
                  <Box className="form_grp">
                    <InputFieldCommon placeholder="Full Name" />
                  </Box>
                  <Box className="form_grp">
                    <InputFieldCommon placeholder="Email Address" />
                  </Box>
                  <Box className="form_grp">
                    <InputFieldCommon placeholder="Description" />
                  </Box>
                  <Box className="form_grp">
                    <CustomButtonPrimary
                      color="primary"
                      type="submit"
                      variant="contained"
                    >
                      <Typography variant="body1">Submit</Typography>
                    </CustomButtonPrimary>
                  </Box>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </OutdoorWrap>
  );
}
