import { Daum, HomeData } from "~/store/store";
import hyrequest from "./index";
export type homeinfotype = "oppo" | "onePlus" | "intelligent";
export type Detialtype = "oppo" | "air" | "watch" | "tablet";
export interface IresultData<T> {
  code: number;
  data: T;
}
export function fetchhomeinfo(type: homeinfotype) {
  return hyrequest.get<IresultData<HomeData>>("/home/info?type=" + type);
}
export function fetchDetail(type: Detialtype) {
  return hyrequest.get<any>("/oppoDetail?type=" + type);
}
