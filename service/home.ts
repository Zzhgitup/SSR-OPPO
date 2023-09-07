import { HomeData } from "~/store/store";
import hyrequest from "./index";
export type homeinfotype = "OPPO" | "OnePlus" | "intelligent";
export interface IresultData<T> {
  code: number;
  data: T;
}
export function fetchhomeinfo(type: homeinfotype) {
  return hyrequest.get<IresultData<HomeData>>("/home/info", {
    type,
  });
}
