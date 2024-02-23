import { LandingPageInterFace } from "@/interface/landingPageInterFace";
import axiosInstance from "../axiosInstance";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";

// export const fetchAboutUs = async () => {
//   try {
//     const res = await ApiRequest.get(endpoints.cms.about);
//     return res;
//   } catch (error) {
//     return error;
//   }
// };

// // Faq
// export const faqQuery =  () => {
//   try {
//   const res =  ApiRequest.get(endpoints.cms.faq);

//   return res;
// } catch (error) {
//   return error;
// }
// };
export interface CmsListTypes {
  statusCode: number
  message: string
  data: Daum[]
}

export interface Daum {
  title: string
  slug: string
}


export const FetchCmsData=async ()=>{
  const res = await axiosInstance.get<CmsListTypes>(endpoints.cms.list)
 // console.log ("responce list :",res)
  return res?.data.data

}

export const FetchCmsDetail =async (id:string)=>{
  const res = await axiosInstance.get(endpoints.cms.details(id))
 // console.log ("responce id ",res)
  return res 
}



export const FetchLandingPage= async()=>{
  const res =await axiosInstance.get<LandingPageInterFace>(endpoints.cms.landingPage)
  console.log("landing page res",res)
  return res.data.data
}



