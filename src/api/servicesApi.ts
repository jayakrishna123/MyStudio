import type { Service } from "@/utils/service";
import API from "./axios";

export const getServices = async (): Promise<Service[]> => {
  const res = await API.get<Service[]>("/services");
  return res.data;
};

export const getServiceById = async (id: number): Promise<Service> => {
  const res = await API.get<Service>(`/services/${id}`);
  return res.data;
};
